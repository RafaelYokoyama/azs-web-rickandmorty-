import { useState, useCallback } from 'react';


import { Episode, Character } from '../types/api';
import { client } from '@/infra/client-config';
import { GraphQLEpisodeRepository } from '@/infra/repositories/graphql-episode-repository';

interface GraphQLEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

interface CharacterEpisodeRef {
  id: string;
  name: string;
  episode: string;
}

const extractEpisodeIds = (episodes: CharacterEpisodeRef[]): string[] => {
  return episodes.map(ep => ep.id);
};

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEpisodes = useCallback(async (characterEpisodes: CharacterEpisodeRef[]) => {
    const episodeRepository = new GraphQLEpisodeRepository(client); 
  
    if (!characterEpisodes || characterEpisodes.length === 0) {
      setEpisodes([]);
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const episodeIds = extractEpisodeIds(characterEpisodes);
      const fetchedEpisodes = await episodeRepository.getEpisodesByIds(episodeIds);
  
      const mappedEpisodes = fetchedEpisodes.map((episode: GraphQLEpisode) => ({
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
        characters: episode.characters,
        url: `https://rickandmortyapi.com/api/episode/${episode.id}`,
        created: episode.created,
      }));
  
      setEpisodes(mappedEpisodes);
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'Failed to fetch episodes';
      setError(errorMessage);
      setEpisodes([]);
    } finally {
      setLoading(false);
    }
  }, []);
  

  const clearEpisodes = useCallback(() => {
    setEpisodes([]);
    setError(null);
  }, []);

  return {
    episodes,
    loading,
    error,
    fetchEpisodes,
    clearEpisodes
  };
};
