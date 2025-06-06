import { Episode } from '@/domain/types'
import { createContext } from 'react'
import { EpisodeFilters } from '../types/api'

interface EpisodeContextType {
  episodes: Episode[]
  setEpisodes: (episodes: Episode[]) => void
  filters: EpisodeFilters
  setFilters: (filters: EpisodeFilters) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  totalPages: number
  setTotalPages: (pages: number) => void
  currentPage: number
  setCurrentPage: (page: number) => void
  favorites: string[]
  toggleFavorite: (id: string) => void
  watchedEpisodes: string[]
  toggleWatched: (id: string) => void
  error: string | null
  setError: (error: string | null) => void
}

export const EpisodeContext = createContext<EpisodeContextType | undefined>(undefined) 