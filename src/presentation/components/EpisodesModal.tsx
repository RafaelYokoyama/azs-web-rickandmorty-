import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

import { Loader2, Calendar, Tv } from 'lucide-react'
import { Character } from '@/presentation/types/api'
import { useEpisodes } from '@/presentation/hooks/useEpisodes'
import { useEffect, useState } from 'react'
import { Badge } from './ui/badge'

interface EpisodesModalProps {
  character: Character | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const EpisodesModal = ({
  character,
  open,
  onOpenChange
}: EpisodesModalProps) => {
  const { episodes, loading, error, fetchEpisodes, clearEpisodes } =
    useEpisodes()
  const [shouldOpen, setShouldOpen] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    if (character && open) {
      setIsInitialLoad(true)
      setShouldOpen(false)
      const episodeRefs = character.episode.map((ep) => ({
        id: ep.id,
        name: ep.name,
        episode: ep.episode
      }))
      fetchEpisodes(episodeRefs)
    } else {
      clearEpisodes()
      setShouldOpen(false)
      setIsInitialLoad(true)
    }
  }, [character, open, fetchEpisodes, clearEpisodes])

  useEffect(() => {
    if (!loading && !error && episodes.length > 0 && isInitialLoad) {
      setIsInitialLoad(false)
      setShouldOpen(true)
    }
  }, [loading, error, episodes, isInitialLoad])

  if (!character) return null

  return (
    <>
      {loading && isInitialLoad && (
        <div className='fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50'>
          <div className='text-center space-y-4'>
            <Loader2 className='h-12 w-12 animate-spin text-primary mx-auto' />
            <p className='text-muted-foreground text-lg'>
              Carregando episódios...
            </p>
          </div>
        </div>
      )}

      <Dialog open={shouldOpen} onOpenChange={onOpenChange}>
        <DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-3'>
              <img
                src={character.image}
                alt={character.name}
                className='w-12 h-12 rounded-full object-cover'
              />
              <div>
                <div className='text-xl'>{character.name}</div>
                <div className='text-sm text-muted-foreground font-normal'>
                  {character.episode.length} episódios
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className='mt-4'>
            {error && (
              <div className='text-center py-8 text-red-500'>
                <div className='text-6xl mb-4'>⚠️</div>
                <h3 className='text-lg font-semibold mb-2'>
                  Erro ao carregar episódios
                </h3>
                <p>{error}</p>
              </div>
            )}

            {!error && episodes.length > 0 && (
              <div className='space-y-3'>
                {episodes.map((episode) => (
                  <div
                    key={episode.id}
                    className='p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors'
                  >
                    <div className='flex items-start justify-between gap-3'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <Badge variant='outline' className='text-xs'>
                            {episode.episode}
                          </Badge>
                          <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                            <Calendar className='h-3 w-3' />
                            {episode.air_date}
                          </div>
                        </div>
                        <h4 className='font-semibold text-sm mb-1'>
                          {episode.name}
                        </h4>
                        <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                          <Tv className='h-3 w-3' />
                          {episode.characters.length} personagens
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
