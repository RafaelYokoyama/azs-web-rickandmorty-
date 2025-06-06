import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    )
  }, [location.pathname])

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#131313]'>
      <div className='text-center text-white'>
        <h1 className='text-6xl font-bold mb-4'>Oops!</h1>

        <img
          src='/error.png'
          alt='Rick Sanchez'
          className='w-2/4 mx-auto mb-4'
        />

        <p className='text-xl mb-4'>Página não econtrada</p>

        <button
          onClick={() => window.history.back()}
          className='bg-black text-[#97ce4c] border py-2 px-6 rounded-full font-bold text-lg hover:bg-[#97ce4c] hover:text-black transition duration-300'
        >
          Voltar
        </button>
      </div>
    </div>
  )
}

export default NotFound
