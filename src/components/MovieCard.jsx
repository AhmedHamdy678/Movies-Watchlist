import { useMovieContext } from "./MoviesContext";
import * as actions from "./Reducer/ActionsType";


export default function MovieCard({film}) {
    // Access global state and dispatch function
    const { dispatch , watchList , watched} = useMovieContext();
    // Check if the movie is already in watchlist
    const storeMovie = watchList.find((movie)=> movie.imdbID === film.imdbID);
    // Check if the movie is already in watched list
    const storeMovieWatched = watched.find((movie)=> movie.imdbID === film.imdbID);

    // Determine if buttons should be disabled
    const watchListDisabled = storeMovie ? true : storeMovieWatched ? true : false;

    const watchedDisabled = storeMovieWatched ? true : false;

    return (
        <div className="movie-card">
            <div className="poster">
                {film.Poster ? 
                (<img src={film.Poster} alt={film.Title} />) : <div className='filter-poster'></div>}
            </div>
            <div className="info">
                <h4>{film.Title}</h4>
                {film.Year ? <h4>{film.Year}</h4> : "-"}
                <div className="buttons">
                    <button disabled={watchListDisabled} onClick={()=>{
                        dispatch({type: actions.ADD_MOVIE_TO_WATCHLIST,payload: film});
                    }}>Add to Watchlist</button>

                    <button disabled={watchedDisabled} onClick={()=>{
                        dispatch({type: actions.ADD_MOVIE_TO_WATCHED, payload: film});
                    }}>Add To Watched</button>
                </div>
            </div>
        </div>
    )
}
