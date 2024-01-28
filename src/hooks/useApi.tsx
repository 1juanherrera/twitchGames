import { useState, useEffect, useCallback } from 'react'
import { getToken, getDataWithToken, searchGameWithToken } from '@/api/apiConfig'
import { IGame, IPagination } from '@/interfaces/interfaces'

export const useApi = (initialCursor?: string) => {
  const [data, setData] = useState<IGame[] | null>(null)
  const [pagination, setPagination] = useState<IPagination>({})
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [loadMore, setLoadMore] = useState(false)

  useEffect(() => {
    // Defino la función getData para obtener los datos de la API
    const getData = async () => {
      setLoading(true)
      try {
        const accessToken = await getToken() // Obtengo el token de acceso

        if (!accessToken) {
          throw new Error('Token no válido') // Si el token no es válido, lanzo un error
        }

        // Si hay una búsqueda, el cursor es una cadena vacía, de lo contrario, es el cursor inicial
        const cursor = search ? '' : initialCursor

        // Realizo la llamada a la API, si hay una búsqueda, uso searchGameWithToken, de lo contrario, uso getDataWithToken
        const dataAPI = search
          ? await searchGameWithToken({ accessToken, name: search })
          : await getDataWithToken({ accessToken, after: cursor })
        setData(dataAPI.data) // Actualizo el estado con los datos obtenidos
        setPagination(dataAPI.pagination) // Actualizo el estado con la paginación obtenida
      } catch (error) {
        console.error('getData error:', error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [initialCursor, search])

  // Defino la función handleLoadMore para cargar más datos cuando se llega al final de la página
  const handleLoadMore = useCallback(async () => {
    setLoadMore(true)
    try {
      const token = await getToken() // Obtengo el token de acceso
      const result = await getDataWithToken({ accessToken: token, after: pagination.cursor }) // Realizo la llamada a la API para obtener más datos
      setData(prevData => [...(prevData || []), ...result.data]) // Actualizo el estado con los nuevos datos
      setPagination(result.pagination) // Actualizo el estado con la nueva paginación
    } finally {
      setLoadMore(false) // Indico que la carga adicional ha terminado
    }
  }, [pagination?.cursor])

  return {
    data,
    loading,
    loadMore,
    search,
    setSearch,
    handleLoadMore
  }
}
