import { Search } from 'lucide-react'
import { Input } from '@/presentation/components/ui/input'
import { useRef, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'

const DEBOUNCE_TIME = 300

export const SearchBar = () => {
  const { filters, setFilters } = useAppContext()
  const [localSearchTerm, setLocalSearchTerm] = useState(filters.name)
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLocalSearchTerm(value)
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    debounceTimeout.current = setTimeout(() => {
      setFilters({
        ...filters,
        name: value,
        page: 1
      })
    }, DEBOUNCE_TIME)
  }

  return (
    <div className='relative w-full max-w-md'>
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
      <Input
        type='text'
        placeholder='Pesquisar personagens'
        value={localSearchTerm}
        onChange={handleSearchChange}
        className='pl-10 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 transition-all duration-300'
      />
    </div>
  )
}
