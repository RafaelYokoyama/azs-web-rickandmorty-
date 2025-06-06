import { Episode } from '../entities/episode';

export interface EpisodeRepository {
  getEpisodes(page?: number): Promise<{
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: Episode[];
  }>;
  
  getEpisodeById(id: string): Promise<Episode>;
  
  getEpisodesByIds(ids: string[]): Promise<Episode[]>;
} 