import { useAppContext } from '../hooks/useAppContext'
import { CharacterCard } from './CharacterCard'
import { CharacterCardSkeleton } from './CharacterCardSkeleton'

export const CharacterGrid = () => {
  const { characters, loading } = useAppContext()

  if (loading) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className='animate-fade-in'>
            <CharacterCardSkeleton />
          </div>
        ))}
      </div>
    )
  }

  if (characters.length === 0) {
    return (
      <div className='text-center py-12'>
        <div className='text-6xl mb-4'>🔍</div>
        <h3 className='text-xl font-semibold text-foreground mb-2'>
          Nenhum personagem encontrado
        </h3>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {characters.map((character) => (
        <div key={character.id} className='animate-fade-in'>
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  )
}
