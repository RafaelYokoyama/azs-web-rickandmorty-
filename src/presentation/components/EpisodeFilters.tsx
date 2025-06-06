import { Search, Heart, Eye, Tv } from 'lucide-react'
import { Input } from '@/presentation/components/ui/input'
import { Button } from '@/presentation/components/ui/button'
import { Badge } from '@/presentation/components/ui/badge'
import { useEpisodeContext } from '../hooks/useEpisodeContext'

export const EpisodeFilters = () => {
  const { filters, setFilters, favorites, watchedEpisodes, setCurrentPage } =
    useEpisodeContext()

  const handleNameChange = (value: string) => {
    setFilters({ ...filters, name: value })
    setCurrentPage(1)
  }

  const toggleFavorites = () => {
    setFilters({
      ...filters,
      showFavorites: !filters.showFavorites,
      showWatched: false
    })
    setCurrentPage(1)
  }

  const toggleWatched = () => {
    setFilters({
      ...filters,
      showWatched: !filters.showWatched,
      showFavorites: false
    })
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      name: '',
      showFavorites: false,
      showWatched: false
    })
    setCurrentPage(1)
  }

  return (
    <div className='bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 p-6 space-y-4'>
      <div className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
        <div className='flex-1 max-w-md'>
          <img src='/rick-and-morty.png' alt='' className='w-12' />
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
            <Input
              placeholder='Buscar episódio pelo nome...'
              value={filters.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className='pl-10 bg-background/80'
            />
          </div>
        </div>

        <div className='flex gap-2 flex-wrap mt-9'>
          <Button
            variant={filters.showFavorites ? 'default' : 'outline'}
            size='sm'
            onClick={toggleFavorites}
            className='flex items-center gap-2'
          >
            <Heart
              className={`h-4 w-4 ${
                filters.showFavorites ? 'fill-current' : ''
              }`}
            />
            <Badge variant='secondary' className='text-xs'>
              {favorites.length}
            </Badge>
            Favoritos
          </Button>

          <Button
            variant={filters.showWatched ? 'default' : 'outline'}
            size='sm'
            onClick={toggleWatched}
            className='flex items-center gap-2'
          >
            <Eye className='h-4 w-4' />
            <Badge variant='secondary' className='text-xs'>
              {watchedEpisodes.length}
            </Badge>
            Assistidos
          </Button>

          {(filters.name || filters.showFavorites || filters.showWatched) && (
            <Button
              variant='ghost'
              size='sm'
              onClick={clearFilters}
              className='flex items-center gap-2'
            >
              <Tv className='h-4 w-4' />
              Todos
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
