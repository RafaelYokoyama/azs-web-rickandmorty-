import { useQuery } from '@apollo/client'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

import { Loader2, Calendar, Tv, Users, Heart, Eye } from 'lucide-react'

import { Badge } from './ui/badge'
import { GET_EPISODE_DETAILS } from '@/infra/graphql/client'
import { useEpisodeContext } from '../hooks/useEpisodeContext'

interface EpisodeDetailsModalProps {
  episodeId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const EpisodeDetailsModal = ({
  episodeId,
  open,
  onOpenChange
}: EpisodeDetailsModalProps) => {
  const { favorites, toggleFavorite, watchedEpisodes, toggleWatched } =
    useEpisodeContext()

  const { data, loading, error } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id: episodeId },
    skip: !open
  })

  const episode = data?.episode
  const isFavorite = favorites.includes(episodeId)
  const isWatched = watchedEpisodes.includes(episodeId)

  if (!episode && !loading) return null

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
        {loading ? (
          <div className='flex justify-center items-center py-8'>
            <Loader2 className='h-8 w-8 animate-spin text-primary' />
          </div>
        ) : error ? (
          <div className='text-center py-4 text-red-500'>
            Erro ao carregar episódio: {error.message}
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className='md:flex md:items-center md:justify-between'>
                <div className='flex-1'>
                  <div className='flex md:block md:items-center  gap-3 mb-2'>
                    <Badge variant='secondary' className='font-mono'>
                      {episode.episode}
                    </Badge>
                    <h2 className='text-2xl font-bold items-start'>
                      {episode.name}
                    </h2>
                  </div>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                    <div className='flex items-center gap-1'>
                      <Calendar className='h-4 w-4' />
                      {episode.air_date}
                    </div>
                    <div className='flex items-center gap-1'>
                      <Users className='h-4 w-4' />
                      {episode.characters.length} personagens
                    </div>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <button
                    onClick={() => toggleWatched(episodeId)}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isWatched
                        ? 'bg-green-500/20 text-green-500'
                        : 'hover:bg-accent text-muted-foreground hover:text-green-500'
                    }`}
                  >
                    <Eye className='h-6 w-6' />
                  </button>
                  <button
                    onClick={() => toggleFavorite(episodeId)}
                    className='p-3 rounded-full hover:bg-accent transition-colors'
                  >
                    <Heart
                      className={`h-6 w-6 ${
                        isFavorite
                          ? 'fill-red-500 text-red-500'
                          : 'text-muted-foreground hover:text-red-500'
                      }`}
                    />
                  </button>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className='mt-6'>
              <h3 className='text-lg font-semibold flex items-center gap-2 mb-4'>
                <Users className='h-5 w-5 text-primary' />
                Personagens ({episode.characters.length})
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {episode.characters.map((character) => (
                  <div
                    key={character.id}
                    className='p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors'
                  >
                    <div className='flex items-center gap-3'>
                      <img
                        src={character.image}
                        alt={character.name}
                        className='w-12 h-12 rounded-full object-cover'
                      />
                      <div className='flex-1 min-w-0'>
                        <h4 className='font-medium text-sm truncate'>
                          {character.name}
                        </h4>
                        <div className='flex items-center gap-2 mt-1'>
                          <div
                            className={`w-2 h-2 rounded-full ${getStatusColor(
                              character.status
                            )}`}
                          />
                          <span className='text-xs text-muted-foreground'>
                            {character.status}
                          </span>
                        </div>
                        <div className='text-xs text-muted-foreground mt-1'>
                          {character.species}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
