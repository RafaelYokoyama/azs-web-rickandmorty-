import { Button } from '@/presentation/components/ui/button'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { useAppContext } from '../hooks/useAppContext'

export const Pagination = () => {
  const { filters, setFilters, totalPages, loading } = useAppContext()
  const currentPage = filters.page

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) return null

  return (
    <div className='flex items-center justify-center space-x-2 mt-8'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        className='border-primary/20 hover:bg-primary/10'
      >
        <ChevronLeft className='h-4 w-4' />
        Previous
      </Button>

      <div className='flex items-center space-x-1'>
        {getVisiblePages().map((page, index) =>
          typeof page === 'number' ? (
            <Button
              key={index}
              variant={currentPage === page ? 'default' : 'outline'}
              size='sm'
              onClick={() => handlePageChange(page)}
              disabled={loading}
              className={`min-w-[40px] ${
                currentPage === page
                  ? 'bg-primary text-primary-foreground'
                  : 'border-primary/20 hover:bg-primary/10'
              }`}
            >
              {page}
            </Button>
          ) : (
            <span key={index} className='px-2 py-1 text-muted-foreground'>
              <MoreHorizontal className='h-4 w-4' />
            </span>
          )
        )}
      </div>

      <Button
        variant='outline'
        size='sm'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        className='border-primary/20 hover:bg-primary/10'
      >
        Next
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}
