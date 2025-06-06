import { useState, useEffect, ReactNode } from 'react'
import { AppContext } from './AppContext'
import { Character, FilterOptions } from '../types/api'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [filters, setFilters] = useState<FilterOptions>({
    name: '',
    status: '',
    species: '',
    gender: '',
    page: 1
  })
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('rick-morty-favorites')
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.error('Error loading favorites:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('rick-morty-favorites', JSON.stringify(favorites))
    } catch (error) {
      console.error('Error saving favorites:', error)
    }
  }, [favorites])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const isFavorite = prev.includes(id)
      const newFavorites = isFavorite
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]

      localStorage.setItem('rick-morty-favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  return (
    <AppContext.Provider
      value={{
        characters,
        setCharacters,
        filters,
        setFilters,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        error,
        setError,
        favorites,
        toggleFavorite,
        showOnlyFavorites,
        setShowOnlyFavorites
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
