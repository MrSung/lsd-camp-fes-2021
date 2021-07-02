import fetch from 'isomorphic-unfetch'

export const fetcher = async <T>(path: string): Promise<T> => {
  const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_BASE_URL } = process.env

  if (typeof NEXT_PUBLIC_API_KEY === `undefined`) {
    throw new Error(`API KEY is undefined!`)
  }

  if (typeof NEXT_PUBLIC_API_BASE_URL === `undefined`) {
    throw new Error(`API BASE URL is undefined!`)
  }

  const options: RequestInit = {
    headers: {
      'X-API-KEY': NEXT_PUBLIC_API_KEY,
    },
  }

  try {
    const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/${path}`, options)

    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
