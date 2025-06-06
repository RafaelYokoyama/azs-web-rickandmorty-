import { Card, CardContent } from '@/presentation/components/ui/card'
import { Skeleton } from '@/presentation/components/ui/skeleton'

export const EpisodeCardSkeleton = () => {
  return (
    <Card className='group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 shadow-lg hover:shadow-xl overflow-hidden'>
      <CardContent className='p-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <Skeleton className='h-6 w-20' />
          <div className='flex gap-2'>
            <Skeleton className='h-8 w-8 rounded-full' />
            <Skeleton className='h-8 w-8 rounded-full' />
          </div>
        </div>

        <div>
          <Skeleton className='h-7 w-3/4 mb-2' />
          <Skeleton className='h-7 w-1/2' />
        </div>

        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-4 w-4' />
            <Skeleton className='h-4 w-32' />
          </div>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-4 w-4' />
            <Skeleton className='h-4 w-24' />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
