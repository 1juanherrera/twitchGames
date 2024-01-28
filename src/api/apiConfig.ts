import axios from 'axios'
import { IGetDataWithToken, ISearchGameWithToken } from '@/interfaces/interfaces'

// Creo una instancia de Axios para las solicitudes al servidor de autenticación
const authAxios = axios.create({ baseURL: process.env.AUTH_BASE_URL })
// Creo una instancia de Axios para las solicitudes a la API de Twitch
const twitchAxios = axios.create({ baseURL: process.env.BASE_URL })

// Obtengo las credenciales de la aplicación desde las variables de entorno
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.API_KEY

// Función para obtener el token de acceso
export async function getToken () {
  try {
    const response = await authAxios.post('/token', {
      client_id: clientID,
      client_secret: clientSecret,
      grant_type: 'client_credentials'
    })

    return response.data.access_token
  } catch (error) {
    console.error('Error al obtener el token:', error)
    throw error
  }
}

// Defino una función asíncrona para acceder a los juegos top en la API de Twitch con el token de acceso
export async function getDataWithToken ({ accessToken, after }: IGetDataWithToken) {
  try {
    // Realizo una solicitud GET al endpoint /games/top con el token de acceso
    const response = await twitchAxios.get('/games/top', {
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        after
      }
    })
    const allData = response.data
    return {
      data: allData.data,
      pagination: allData.pagination
    }
  } catch (error) {
    console.error('Error al obtener datos de la API de Twitch:', error)
    return {
      data: [],
      pagination: {}
    }
  }
}

// Defino una función asíncrona para buscar un juego en la API de Twitch con el token de acceso
export async function searchGameWithToken ({ accessToken, name }: ISearchGameWithToken) {
  try {
    // Realizo una solicitud GET al endpoint /games con el token de acceso y el nombre del juego
    const response = await twitchAxios.get('/games', {
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        name
      }
    })
    const allData = response.data
    return {
      data: allData.data,
      pagination: allData.pagination
    }
  } catch (error) {
    console.error('Error al obtener datos de la API de Twitch:', error)
    return {
      data: [],
      pagination: {}
    }
  }
}
