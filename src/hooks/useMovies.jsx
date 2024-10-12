import { fetchMovies } from './../services/movies';
import { useState, useRef, useCallback, useMemo } from 'react';

export function useMovies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [sort, setSort] = useState(false)
    const prevSearchStr = useRef('')

    const getMovies = useCallback(async (searchStr) => {
        try {
            setLoading(true)
            setError(null)

            if (prevSearchStr.current === searchStr) {
                return // Do not fetch movies again if search string did not change.
            }

            prevSearchStr.current = searchStr

            const movies = await fetchMovies(searchStr)

            setMovies(movies.Search)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])

    const sortedMovies = useMemo(
        () => {
            return (sort === true) ? movies.toSorted((a,b) => a.Title.localeCompare(b.Title)) : movies
        },
        [movies, sort]
    )

    return {
        getMovies,
        movies: sortedMovies,
        error,
        loading,
        setSort,
        sort
    }
}