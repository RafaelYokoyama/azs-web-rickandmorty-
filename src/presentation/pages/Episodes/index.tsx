import { Header } from '@/presentation/components/Header'

import { useEpisodesData } from '@/presentation/hooks/useEpisodesData'
import { EpisodeFilters } from '@/presentation/components/EpisodeFilters'
import { EpisodeGrid } from '@/presentation/components/EpisodeGrid'
import { EpisodePagination } from '@/presentation/components/EpisodePagination'
import { useEpisodeContext } from '@/presentation/hooks/useEpisodeContext'

export default function Episodes() {
  useEpisodesData()
  const { totalPages, currentPage, filters } = useEpisodeContext()

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5'>
      <Header />
      <main className='container mx-auto px-4 py-8 space-y-8'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Episódios Rick & Morty
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Explore todos os episódios do universo Rick and Morty. Busque,
            favorite e marque como assistido.
          </p>
        </div>

        <EpisodeFilters />

        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold text-foreground'>
              {filters.showFavorites
                ? 'Episódios Favoritos'
                : filters.showWatched
                ? 'Episódios Assistidos'
                : 'Todos os Episódios'}
            </h2>
            {!filters.showFavorites &&
              !filters.showWatched &&
              totalPages > 0 && (
                <p className='text-sm text-muted-foreground'>
                  Página {currentPage} de {totalPages}
                </p>
              )}
          </div>

          <EpisodeGrid />
          <EpisodePagination />
        </div>
      </main>
    </div>
  )
}
