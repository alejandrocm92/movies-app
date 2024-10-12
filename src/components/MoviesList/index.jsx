import './styles.css' 

export function MoviesList({ movies }) {
    return (
        <>
        {
            movies?.length > 0 && (
                <ul className='movies-grid'>
                {
                    movies.map(movie => (
                        <li key={movie.imdbID} className='movie'>
                            <h3>{movie.Title}</h3>
                            <img src={movie.Poster} alt={movie.Title} className='image' />
                        </li>
                    ))
                }
                </ul>
            )
        }
        {
            !movies && <span>No movies were found</span>
        }
        </>
    )
}
