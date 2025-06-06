import { useState } from 'react'
import { Card, CardContent } from '@/presentation/components/ui/card'
import { Badge } from '@/presentation/components/ui/badge'
import { MapPin, Tv } from 'lucide-react'

import { CharacterDetailsModal } from './CharacterDetailsModal'
import { CharacterEpisodesModal } from './CharacterEpisodesModal'
import { Character } from '@/presentation/types/api'

interface CharacterCardProps {
  character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showEpisodes, setShowEpisodes] = useState(false)

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
    <>
      <Card
        className='group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer h-full flex flex-col'
        onClick={() => setShowDetails(true)}
      >
        <div className='relative'>
          <div
            className={`w-full h-64 bg-muted animate-pulse ${
              imageLoaded ? 'hidden' : 'block'
            }`}
          />
          <img
            src={character.image}
            alt={character.name}
            className={`w-full h-64 object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onClick={(e) => {
              e.stopPropagation()
              setShowEpisodes(true)
            }}
          />

          <div className='absolute bottom-3 left-3'>
            <div
              className={`w-3 h-3 rounded-full ${getStatusColor(
                character.status
              )} ring-2 ring-background`}
            />
          </div>

          <div className='absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
            <div className='bg-background/90 backdrop-blur-sm rounded-full p-2'>
              <Tv className='h-5 w-5 text-primary' />
            </div>
          </div>
        </div>

        <CardContent className='p-6 space-y-4 flex-1 flex flex-col'>
          <div>
            <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2'>
              {character.name}
            </h3>
            <div className='flex flex-wrap gap-2 mt-2'>
              <Badge variant='secondary' className='text-xs'>
                {character.status}
              </Badge>
              <Badge variant='outline' className='text-xs'>
                {character.species}
              </Badge>
              {character.gender && (
                <Badge variant='outline' className='text-xs'>
                  {character.gender}
                </Badge>
              )}
            </div>
          </div>

          <div className='space-y-2 text-sm text-muted-foreground mt-auto'>
            <div className='flex items-center gap-2'>
              <MapPin className='h-4 w-4 text-primary flex-shrink-0' />
              <span className='truncate'>{character.origin.name}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Tv className='h-4 w-4 text-primary flex-shrink-0' />
              <span>{character.episode.length} episódios</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <CharacterDetailsModal
        character={character}
        open={showDetails}
        onOpenChange={setShowDetails}
      />

      <CharacterEpisodesModal
        character={character}
        open={showEpisodes}
        onOpenChange={setShowEpisodes}
      />
    </>
  )
}
