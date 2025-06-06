import { Button } from '@/presentation/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEpisodeContext } from '../hooks/useEpisodeContext'

export const EpisodePagination = () => {
  const { currentPage, setCurrentPage, totalPages, filters } =
    useEpisodeContext()

  if (filters.showFavorites || filters.showWatched || totalPages <= 1) {
    return null
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    const end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div className='flex items-center justify-center space-x-2 mt-8'>
      <Button
        variant='outline'
        size='sm'
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft className='h-4 w-4' />
        Anterior
      </Button>

      {getPageNumbers().map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'default' : 'outline'}
          size='sm'
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        variant='outline'
        size='sm'
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Próxima
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}
