import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'

import { Filter, RotateCcw } from 'lucide-react'

import { Button } from './ui/button'
import { useAppContext } from '../hooks/useAppContext'

export const FilterPanel = () => {
  const { filters, setFilters } = useAppContext()

  const resetFilters = () => {
    setFilters({
      name: '',
      status: '',
      species: '',
      gender: '',
      page: 1
    })
  }

  const updateFilter = (key: keyof typeof filters, value: string) => {
    const apiValue = value.startsWith('all-') ? '' : value
    setFilters({ ...filters, [key]: apiValue, page: 1 })
  }

  const getDisplayValue = (filterValue: string, type: string) => {
    return filterValue === '' ? `all-${type}` : filterValue
  }

  return (
    <div className='bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg'>
      <div className='flex items-center gap-2 mb-4'>
        <Filter className='h-5 w-5 text-primary' />
        <h3 className='text-lg font-semibold'>Filtros</h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Select
          value={getDisplayValue(filters.status, 'status')}
          onValueChange={(value) => updateFilter('status', value)}
        >
          <SelectTrigger className='bg-background/50 border-primary/20'>
            <SelectValue placeholder='Status' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all-status'>All Status</SelectItem>
            <SelectItem value='alive'>Alive</SelectItem>
            <SelectItem value='dead'>Dead</SelectItem>
            <SelectItem value='unknown'>Unknown</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={getDisplayValue(filters.species, 'species')}
          onValueChange={(value) => updateFilter('species', value)}
        >
          <SelectTrigger className='bg-background/50 border-primary/20'>
            <SelectValue placeholder='Species' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all-species'>All Species</SelectItem>
            <SelectItem value='human'>Human</SelectItem>
            <SelectItem value='alien'>Alien</SelectItem>
            <SelectItem value='robot'>Robot</SelectItem>
            <SelectItem value='animal'>Animal</SelectItem>
            <SelectItem value='cronenberg'>Cronenberg</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={getDisplayValue(filters.gender, 'gender')}
          onValueChange={(value) => updateFilter('gender', value)}
        >
          <SelectTrigger className='bg-background/50 border-primary/20'>
            <SelectValue placeholder='Gender' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all-gender'>All Genders</SelectItem>
            <SelectItem value='male'>Male</SelectItem>
            <SelectItem value='female'>Female</SelectItem>
            <SelectItem value='genderless'>Genderless</SelectItem>
            <SelectItem value='unknown'>Unknown</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={resetFilters}
          variant='outline'
          className='border-primary/20 hover:bg-primary/10 transition-all duration-300'
        >
          <RotateCcw className='h-4 w-4 mr-2' />
          Reset
        </Button>
      </div>
    </div>
  )
}
