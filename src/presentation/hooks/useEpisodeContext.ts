import { useContext } from 'react'
import { EpisodeContext } from '../context/episodeContext'


export const useEpisodeContext = () => {
  const context = useContext(EpisodeContext)
  if (context === undefined) {
    throw new Error('useEpisodeContext must be used within an EpisodeProvider')
  }
  return context
} 