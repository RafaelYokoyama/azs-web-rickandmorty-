import { Link, useLocation } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { Tv } from 'lucide-react'
import { Button } from '@/presentation/components/ui/button'

export const Header = () => {
  const location = useLocation()
  const isEpisodesPage = location.pathname === '/episodes'

  return (
    <header className='sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/80 backdrop-blur-lg'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center space-x-4'>
            <div className='text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
              <img src='/logo.png' alt='logo' />
            </div>
            <nav className='flex items-center gap-2'>
              <Link to='/'>
                <Button
                  variant={!isEpisodesPage ? 'default' : 'outline'}
                  size='sm'
                >
                  Personagens
                </Button>
              </Link>
              <Link to='/episodes'>
                <Button
                  variant={isEpisodesPage ? 'default' : 'outline'}
                  size='sm'
                >
                  <Tv className='h-4 w-4 mr-2' />
                  Episódios
                </Button>
              </Link>
            </nav>
          </div>
          {!isEpisodesPage && <SearchBar />}
        </div>
      </div>
    </header>
  )
}
