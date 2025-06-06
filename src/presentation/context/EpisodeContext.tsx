import { useState, ReactNode } from 'react'

import { EpisodeContext } from './episodeContext'
import { EpisodeFilters } from '../types/api'
import { Episode } from '@/domain/types'

interface EpisodeProviderProps {
  children: ReactNode
}

export const EpisodeProvider = ({ children }: EpisodeProviderProps) => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [filters, setFilters] = useState<EpisodeFilters>({
    name: '',
    showFavorites: false,
    showWatched: false
  })
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState<string | null>(null)

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('rick-morty-episode-favorites')
    return saved ? JSON.parse(saved) : []
  })

  const [watchedEpisodes, setWatchedEpisodes] = useState<string[]>(() => {
    const saved = localStorage.getItem('rick-morty-watched-episodes')
    return saved ? JSON.parse(saved) : []
  })

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
      localStorage.setItem(
        'rick-morty-episode-favorites',
        JSON.stringify(newFavorites)
      )
      return newFavorites
    })
  }

  const toggleWatched = (id: string) => {
    setWatchedEpisodes((prev) => {
      const newWatched = prev.includes(id)
        ? prev.filter((watchedId) => watchedId !== id)
        : [...prev, id]
      localStorage.setItem(
        'rick-morty-watched-episodes',
        JSON.stringify(newWatched)
      )
      return newWatched
    })
  }

  return (
    <EpisodeContext.Provider
      value={{
        episodes,
        setEpisodes,
        filters,
        setFilters,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
        favorites,
        toggleFavorite,
        watchedEpisodes,
        toggleWatched,
        error,
        setError
      }}
    >
      {children}
    </EpisodeContext.Provider>
  )
}
