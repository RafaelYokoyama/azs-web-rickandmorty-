import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/presentation/components/ui/dialog'
import { Badge } from '@/presentation/components/ui/badge'
import { Button } from '@/presentation/components/ui/button'
import { Loader2, Calendar, Users, Heart, Eye, Tv } from 'lucide-react'
import { Character, Episode } from '@/presentation/types/api'
import { useEpisodes } from '@/presentation/hooks/useEpisodes'

import { useEffect } from 'react'
import { EpisodeDetailsModal } from './EpisodeDetailsModal'
import { useEpisodeContext } from '../hooks/useEpisodeContext'

interface CharacterEpisodesModalProps {
  character: Character | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const CharacterEpisodesModal = ({
  character,
  open,
  onOpenChange
}: CharacterEpisodesModalProps) => {
  const { episodes, loading, error, fetchEpisodes, clearEpisodes } =
    useEpisodes()
  const { favorites, toggleFavorite, watchedEpisodes, toggleWatched } =
    useEpisodeContext()
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<string | null>(
    null
  )
  const [showEpisodeDetails, setShowEpisodeDetails] = useState(false)

  useEffect(() => {
    if (character && open) {
      const episodeRefs = character.episode.map((ep) => ({
        id: ep.id,
        name: ep.name,
        episode: ep.episode
      }))
      fetchEpisodes(episodeRefs)
    } else {
      clearEpisodes()
    }
  }, [character, open, fetchEpisodes, clearEpisodes])

  if (!character) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'bg-green-500'
      case 'dead':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  const handleEpisodeClick = (episodeId: string) => {
    setSelectedEpisodeId(episodeId)
    setShowEpisodeDetails(true)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className='max-w-6xl max-h-[90vh] overflow-y-auto'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-4'>
              <img
                src={character.image}
                alt={character.name}
                className='w-16 h-16 rounded-full object-cover border-4 border-primary/20'
              />
              <div>
                <div className='text-2xl font-bold'>{character.name}</div>
                <div className='text-sm text-muted-foreground'>
                  {character.episode.length} episódios • {character.status} •{' '}
                  {character.species}
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className='mt-6'>
            {loading && (
              <div className='flex justify-center items-center py-12'>
                <div className='text-center space-y-4'>
                  <Loader2 className='h-12 w-12 animate-spin text-primary mx-auto' />
                  <p className='text-muted-foreground'>
                    Carregando episódios...
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className='text-center py-8 text-red-500'>
                <div className='text-6xl mb-4'>⚠️</div>
                <h3 className='text-lg font-semibold mb-2'>
                  Erro ao carregar episódios
                </h3>
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && episodes.length > 0 && (
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-semibold flex items-center gap-2'>
                    <Tv className='h-6 w-6 text-primary' />
                    Episódios com {character.name}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {episodes.length} episódio{episodes.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {episodes.map((episode: Episode) => {
                    const isFavorite = favorites.includes(episode.id.toString())
                    const isWatched = watchedEpisodes.includes(
                      episode.id.toString()
                    )

                    return (
                      <div
                        key={episode.id}
                        className='group p-6 rounded-xl border bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg space-y-4 cursor-pointer'
                        onClick={() =>
                          handleEpisodeClick(episode.id.toString())
                        }
                      >
                        <div className='flex items-start justify-between'>
                          <Badge
                            variant='secondary'
                            className='font-mono text-sm'
                          >
                            {episode.episode}
                          </Badge>
                          <div className='flex gap-1'>
                            <Button
                              size='sm'
                              variant='ghost'
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleWatched(episode.id.toString())
                              }}
                              className={`h-8 w-8 p-0 ${
                                isWatched
                                  ? 'text-green-500 bg-green-500/10 hover:bg-green-500/20'
                                  : 'text-muted-foreground hover:text-green-500'
                              }`}
                            >
                              <Eye className='h-4 w-4' />
                            </Button>
                            <Button
                              size='sm'
                              variant='ghost'
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleFavorite(episode.id.toString())
                              }}
                              className={`h-8 w-8 p-0 ${
                                isFavorite
                                  ? 'text-red-500 bg-red-500/10 hover:bg-red-500/20'
                                  : 'text-muted-foreground hover:text-red-500'
                              }`}
                            >
                              <Heart
                                className={`h-4 w-4 ${
                                  isFavorite ? 'fill-current' : ''
                                }`}
                              />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h4 className='font-semibold text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors'>
                            {episode.name}
                          </h4>
                        </div>

                        {episode.characters &&
                          episode.characters.length > 0 && (
                            <div className='space-y-2 mt-2'>
                              <div className='text-xs text-muted-foreground font-medium'>
                                Personagens:
                              </div>
                              <div className='flex items-center -space-x-2 overflow-hidden'>
                                {episode.characters
                                  .slice(0, 8)
                                  .map((character: Character) => {
                                    return (
                                      <div
                                        key={character.id}
                                        className='relative'
                                      >
                                        <img
                                          src={character.image}
                                          alt={character.name}
                                          className='w-8 h-8 rounded-full border-2 border-background object-cover'
                                          onError={(e) => {
                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${character.name.charAt(
                                              0
                                            )}&background=random`
                                          }}
                                        />
                                      </div>
                                    )
                                  })}
                                {episode.characters.length > 8 && (
                                  <div className='w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium'>
                                    +{episode.characters.length - 8}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                        <div className='space-y-2 text-sm text-muted-foreground'>
                          <div className='flex items-center gap-2'>
                            <Calendar className='h-4 w-4 text-primary flex-shrink-0' />
                            <span>{episode.air_date}</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <Users className='h-4 w-4 text-primary flex-shrink-0' />
                            <span>{episode.characters.length} personagens</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {selectedEpisodeId && (
        <EpisodeDetailsModal
          episodeId={selectedEpisodeId}
          open={showEpisodeDetails}
          onOpenChange={setShowEpisodeDetails}
        />
      )}
    </>
  )
}
