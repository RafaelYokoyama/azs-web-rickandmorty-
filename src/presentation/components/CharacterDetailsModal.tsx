import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/presentation/components/ui/dialog'
import { Badge } from '@/presentation/components/ui/badge'
import { Loader2, Calendar, Tv, MapPin, User, Heart, Eye } from 'lucide-react'

import { useEffect } from 'react'
import { Character, Episode } from '@/presentation/types/api'
import { useEpisodes } from '@/presentation/hooks/useEpisodes'

interface CharacterDetailsModalProps {
  character: Character | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const CharacterDetailsModal = ({
  character,
  open,
  onOpenChange
}: CharacterDetailsModalProps) => {
  const { episodes, loading, fetchEpisodes } = useEpisodes()

  useEffect(() => {
    if (character && open) {
      const episodeRefs = character.episode.map((ep) => ({
        id: ep.id,
        name: ep.name,
        episode: ep.episode
      }))
      fetchEpisodes(episodeRefs)
    }
  }, [character, open, fetchEpisodes])

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-4'>
            <img
              src={character.image}
              alt={character.name}
              className='w-16 h-16 rounded-full object-cover'
            />
            <div className='flex-1'>
              <div className='flex items-center gap-2 mt-1'>
                <div
                  className={`w-3 h-3 rounded-full ${getStatusColor(
                    character.status
                  )}`}
                />
                <span className='text-sm text-muted-foreground'>
                  {character.status}
                </span>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold flex items-center gap-2'>
              <User className='h-5 w-5 text-primary' />
              Informações do Personagem
            </h3>

            <div className='space-y-3'>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='secondary'>{character.status}</Badge>
                <Badge variant='outline'>{character.species}</Badge>
                {character.type && (
                  <Badge variant='outline'>{character.type}</Badge>
                )}
                <Badge variant='outline'>{character.gender}</Badge>
              </div>

              <div className='space-y-2 text-sm'>
                <div className='flex items-start gap-2'>
                  <MapPin className='h-4 w-4 text-primary mt-0.5' />
                  <div>
                    <div className='font-medium'>Origem:</div>
                    <div className='text-muted-foreground'>
                      {character.origin.name}
                    </div>
                  </div>
                </div>

                <div className='flex items-start gap-2'>
                  <MapPin className='h-4 w-4 text-primary mt-0.5' />
                  <div>
                    <div className='font-medium'>Localização:</div>
                    <div className='text-muted-foreground'>
                      {character.location.name}
                    </div>
                  </div>
                </div>

                <div className='flex items-start gap-2'>
                  <Calendar className='h-4 w-4 text-primary mt-0.5' />
                  <div>
                    <div className='font-medium'>Criado em:</div>
                    <div className='text-muted-foreground'>
                      {new Date(character.created).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold flex items-center gap-2'>
              <Tv className='h-5 w-5 text-primary' />
              Episódios ({episodes.length})
            </h3>

            {loading && (
              <div className='flex justify-center items-center py-8'>
                <Loader2 className='h-8 w-8 animate-spin text-primary' />
              </div>
            )}

            {!loading && episodes.length > 0 && (
              <div className='space-y-2 max-h-80 overflow-y-auto'>
                {episodes.map((episode: Episode) => (
                  <div
                    key={episode.id}
                    className='p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors'
                  >
                    <div className='flex items-start justify-between gap-2'>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 mb-1'>
                          <Badge variant='outline' className='text-xs'>
                            {episode.episode}
                          </Badge>
                          <div className='text-xs text-muted-foreground'>
                            {episode.air_date}
                          </div>
                        </div>
                        <h4 className='font-medium text-sm truncate'>
                          {episode.name}
                        </h4>
                        {episode.characters &&
                          episode.characters.length > 0 && (
                            <div className='flex items-center -space-x-2 overflow-hidden mt-1'>
                              {episode.characters
                                .slice(0, 8)
                                .map((char: Character) => {
                                  return (
                                    <div key={char.id} className='relative'>
                                      <img
                                        src={char.image}
                                        alt={char.name}
                                        className='w-6 h-6 rounded-full border-2 border-background object-cover'
                                        onError={(e) => {
                                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${char.name.charAt(
                                            0
                                          )}&background=random`
                                        }}
                                      />
                                    </div>
                                  )
                                })}
                              {episode.characters.length > 8 && (
                                <div className='w-6 h-6 pl-4 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium'>
                                  +{episode.characters.length - 8}
                                </div>
                              )}
                            </div>
                          )}
                        <div className='text-xs text-muted-foreground mt-1'>
                          {episode.characters.length} personagens
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
