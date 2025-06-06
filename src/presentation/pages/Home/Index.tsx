import { useEffect, useState } from 'react'
import { Header } from '@/presentation/components/Header'
import { CharacterGrid } from '@/presentation/components/CharacterGrid'
import { Pagination } from '@/presentation/components/Pagination'
import { LoadingScreen } from '@/presentation/components/LoadingScreen'
import { useCharacters } from '@/presentation/hooks/useCharacters'
import { useFavorites } from '@/presentation/hooks/useFavorites'
import { useAppContext } from '@/presentation/hooks/useAppContext'

export default function Home() {
  const { fetchCharacters } = useCharacters()
  const { fetchFavorites } = useFavorites()
  const { filters, totalPages, showOnlyFavorites, favorites, loading } =
    useAppContext()
  const [initialLoading, setInitialLoading] = useState(() => {
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading')
    return !hasSeenLoading
  })

  useEffect(() => {
    if (showOnlyFavorites) {
      fetchFavorites()
    } else {
      fetchCharacters()
    }
  }, [fetchCharacters, fetchFavorites, showOnlyFavorites, favorites])

  const handleLoadingComplete = () => {
    setInitialLoading(false)
    sessionStorage.setItem('hasSeenLoading', 'true')
  }

  if (initialLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5'>
      <Header />

      <main className='container mx-auto px-4 py-8 space-y-8'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            {showOnlyFavorites ? 'Seus Favoritos' : 'Explore o Multiverso'}
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            {showOnlyFavorites
              ? 'Seus personagens favoritos do universo Rick and Morty'
              : 'Descubra todos os personagens do universo Rick and Morty. Pesquise, filtre e explore seus seres interdimensionais favoritos.'}
          </p>
        </div>

        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold text-foreground'>
              Personagens
            </h2>
            {!showOnlyFavorites && totalPages > 0 && (
              <p className='text-sm text-muted-foreground'>
                Página {filters.page} de {totalPages}
              </p>
            )}
          </div>

          {loading ? (
            <div className='flex justify-center items-center min-h-[200px]'>
              <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary'></div>
            </div>
          ) : (
            <>
              <CharacterGrid />
              {!showOnlyFavorites && <Pagination />}
            </>
          )}
        </div>
      </main>
    </div>
  )
}
