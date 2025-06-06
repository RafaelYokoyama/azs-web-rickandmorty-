import { EpisodeCard } from './EpisodeCard'
import { EpisodeCardSkeleton } from './EpisodeCardSkeleton'
import { useEpisodeContext } from '../hooks/useEpisodeContext'

export const EpisodeGrid = () => {
  const { episodes, loading, error } = useEpisodeContext()

  if (loading) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className='animate-fade-in'>
            <EpisodeCardSkeleton />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center py-12'>
        <div className='text-6xl mb-4'>⚠️</div>
        <h3 className='text-xl font-semibold text-foreground mb-2'>
          Erro ao carregar episódios
        </h3>
        <p className='text-muted-foreground'>{error}</p>
      </div>
    )
  }

  if (episodes.length === 0) {
    return (
      <div className='text-center py-12'>
        <div className='text-6xl mb-4'>📺</div>
        <h3 className='text-xl font-semibold text-foreground mb-2'>
          Nenhum episódio encontrado
        </h3>
        <p className='text-muted-foreground'>
          Tente ajustar sua busca ou filtros
        </p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {episodes.map((episode) => (
        <div key={episode.id} className='animate-fade-in'>
          <EpisodeCard episode={episode} />
        </div>
      ))}
    </div>
  )
}
