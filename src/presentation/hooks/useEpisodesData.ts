import { useQuery } from '@apollo/client';


import { useEffect, useMemo } from 'react';
import { Episode, Character } from '../types/api';
import { GET_EPISODES } from '@/infra/graphql/client';
import { useEpisodeContext } from './useEpisodeContext';

interface GraphQLEpisode extends Omit<Episode, 'characters'> {
  characters: Character[];
}

export const useEpisodesData = () => {
  const { 
    setEpisodes, 
    setLoading, 
    setTotalPages, 
    currentPage, 
    filters,
    favorites,
    watchedEpisodes,
    setError
  } = useEpisodeContext();

  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: {
      page: currentPage
    },
    fetchPolicy: 'network-only',
    onError: (error) => {
      console.error('Erro ao buscar episódios:', error);
      setError(error.message);
    }
  });

  const filteredEpisodes = useMemo(() => {
    if (!data?.episodes?.results) return [];

    let episodes = data.episodes.results.map((episode: GraphQLEpisode) => ({
      ...episode,
      characters: episode.characters,
    }));

    
    if (filters.name) {
      episodes = episodes.filter(episode => 
        episode.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.showFavorites) {
      episodes = episodes.filter(episode => 
        favorites.includes(episode.id.toString())
      );
    }

    if (filters.showWatched) {
      episodes = episodes.filter(episode => 
        watchedEpisodes.includes(episode.id.toString())
      );
    }

    return episodes;
  }, [data?.episodes?.results, filters, favorites, watchedEpisodes]);

  useEffect(() => {
    setLoading(loading);
    if (data?.episodes) {
      setEpisodes(filteredEpisodes);
      setTotalPages(data.episodes.info.pages || 1);
    }
  }, [loading, data?.episodes, filteredEpisodes, setLoading, setEpisodes, setTotalPages]);

  return { error };
};
