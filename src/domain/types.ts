export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: Location;
  origin: Origin;
  episode: Episode[];
  created: string;
}

export interface Location {
  name: string;
}

export interface Origin {
  name: string;
}

export interface EpisodesResponse {
  episodes: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: Episode[];
  };
}

export interface EpisodeDetailsResponse {
  episode: Episode;
}

export interface CharactersByIdsResponse {
  charactersByIds: Character[];
}

export interface EpisodesByIdsResponse {
  episodesByIds: Episode[];
} 