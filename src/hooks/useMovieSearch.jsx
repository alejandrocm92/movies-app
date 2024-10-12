import { useState, useEffect } from 'react'

export function useMovieSearch() {
    const [ search, setSearch ] = useState('')
    const [ error, setError ] = useState(null)

    useEffect(() => {
        if (!isNaN(search) && search !== '') {
            setError('Search string cannot be a number')
            return 
        }

        // If no error, set error state to null (default).
        setError(null)
    }, [search])

    return {
        search,
        setSearch,
        searchError: error
    }
}