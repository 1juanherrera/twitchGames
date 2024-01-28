'use client'
import { useApi } from '@/hooks/useApi'
import Card from './card'
import { Loading } from './loading'
import NotFound from './notFound'
import { IGame } from '@/interfaces/interfaces'

export const Home = () => {
  // Obtengo el cursor inicial desde las variables de entorno
  const initialCursor = process.env.CURSOR || ''

  // Utilizo el hook useApi para obtener los datos y las funciones necesarias
  const { handleLoadMore, loading, search, setSearch, data, loadMore } = useApi(initialCursor)

  return (
    <div>
      <h1 className='container w-full md:w-10/12 text-3xl font-bold px-4 py-5 md:mt-5'>All Games</h1>
      {/* Renderizo un input para la búsqueda de juegos */}
      <div className='flex justify-center items-center'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Look for a game'
          className='container w-3/5 outline-none md:w-64 md:absolute md:top-8 py-2 px-3 bg-[#18181b] border-2 border-[#505054] text-white rounded'
        />
      </div>
      {/* Si los datos están cargando, muestro un componente de carga */}
      {loading && (
        <div className="container h-20 text-center text-2xl font-bold">
          <Loading />
        </div>
      )}
      {/* Si los datos han cargado y hay juegos, los muestro en una lista */}
      {!loading && data && data.length > 0 && (
        <div className='container grid gap-8 pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full md:w-9/12 pb-10'>
          {data.map((game: IGame) => (
            <Card key={game.id} {...game} />
          ))}
        </div>
      )}
      {/* Si los datos han cargado y no hay juegos, muestro un componente de no encontrado */}
      {!loading && data && data.length === 0 && (
        <NotFound />
      )}

      {/* Si no se está realizando una búsqueda, muestro un botón para cargar más juegos */}
      {search === '' && !loading && (
        <button
          onClick={handleLoadMore}
          className='w-36 p-2 mb-5 rounded-3xl bg-[#a970ff] text-white mx-auto block'
        >
          {loadMore ? <Loading /> : 'Load more'}
        </button>
      )}
    </div>
  )
}
