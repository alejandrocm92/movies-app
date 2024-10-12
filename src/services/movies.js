export async function fetchMovies(searchStr) {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchStr}`)

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`)
        }

        return await response.json()
    } catch (e) {
        throw new Error(e.message)
    }

    return []
}