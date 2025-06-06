import { useState } from 'react'
import { Card, CardContent } from '@/presentation/components/ui/card'
import { Badge } from '@/presentation/components/ui/badge'
import { Heart, Eye, Calendar, Users } from 'lucide-react'

import { EpisodeDetailsModal } from './EpisodeDetailsModal'
import { Episode } from '@/domain/types'
import { useEpisodeContext } from '../hooks/useEpisodeContext'

interface EpisodeCardProps {
  episode: Episode
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  const { favorites, toggleFavorite, watchedEpisodes, toggleWatched } =
    useEpisodeContext()
  const [showDetails, setShowDetails] = useState(false)

  const isFavorite = favorites.includes(episode.id)
  const isWatched = watchedEpisodes.includes(episode.id)

  return (
    <>
      <Card
        className='group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer h-full flex flex-col'
        onClick={() => setShowDetails(true)}
      >
        <CardContent className='p-6 space-y-4 flex-1 flex flex-col'>
          <div className='flex items-center justify-between'>
            <Badge variant='secondary' className='text-sm font-mono'>
              {episode.episode}
            </Badge>
            <div className='flex gap-2'>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleWatched(episode.id)
                }}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isWatched
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-background/80 backdrop-blur-sm hover:bg-background text-muted-foreground hover:text-green-500'
                }`}
              >
                <Eye className='h-4 w-4' />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(episode.id)
                }}
                className='p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-300'
              >
                <Heart
                  className={`h-4 w-4 transition-all duration-300 ${
                    isFavorite
                      ? 'fill-red-500 text-red-500'
                      : 'text-muted-foreground hover:text-red-500'
                  }`}
                />
              </button>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2'>
              {episode.name}
            </h3>
          </div>

          {episode.characters && episode.characters.length > 0 && (
            <div className='flex items-center -space-x-2 overflow-hidden mt-2'>
              {episode.characters.slice(0, 5).map((character) => (
                <img
                  key={character.id}
                  className='inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover'
                  src={character.image}
                  alt={character.name}
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${character.name.charAt(
                      0
                    )}&background=random&color=fff`
                  }}
                />
              ))}
              {episode.characters.length > 5 && (
                <div className='h-8 w-8 rounded-full ring-2 ring-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground'>
                  +{episode.characters.length - 5}
                </div>
              )}
            </div>
          )}

          <div className='space-y-2 text-sm text-muted-foreground mt-auto'>
            <div className='flex items-center gap-2'>
              <Calendar className='h-4 w-4 text-primary flex-shrink-0' />
              <span>{episode.air_date}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='h-4 w-4 text-primary flex-shrink-0' />
              <span>{episode.characters.length} personagens</span>
            </div>
          </div>

          {(isFavorite || isWatched) && (
            <div className='flex gap-2 mt-3'>
              {isFavorite && (
                <Badge variant='destructive' className='text-xs'>
                  Favorito
                </Badge>
              )}
              {isWatched && (
                <Badge variant='default' className='text-xs'>
                  Assistido
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <EpisodeDetailsModal
        episodeId={episode.id}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  )
}
