import { createContext } from 'react'
import { Character, FilterOptions } from '../types/api'

interface AppContextType {
  characters: Character[]
  setCharacters: (characters: Character[]) => void
  filters: FilterOptions
  setFilters: (filters: FilterOptions) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  totalPages: number
  setTotalPages: (pages: number) => void
  error: string | null
  setError: (error: string | null) => void
  favorites: number[]
  toggleFavorite: (id: number) => void
  showOnlyFavorites: boolean
  setShowOnlyFavorites: (show: boolean) => void
}

export const AppContext = createContext<AppContextType | undefined>(undefined)
