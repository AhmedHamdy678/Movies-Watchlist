import { useMovieContext } from "./MoviesContext";
import MovieCardWatchList from "./MovieCardWatchList";
import "./WatchList.css";

export default function WatchList() {
    const { watchList } = useMovieContext();
    return (
        <div className="watch-list">
        <div className="container">
            <div className="main-heading">
            <h1>My WatchList</h1>
            <span className="movies-count">{watchList?.length || 0} Movies</span>
            </div>
            {watchList && watchList.length > 0 ? (
            <div className="movie-grid">
                {watchList.map((film) => (
                <MovieCardWatchList
                    key={film.imdbID}
                    film={film}
                    type="watchlist"
                />
                ))}
            </div>
            ) : (
            <h2 className="no-movies">No movies in your watchlist, add some!</h2>
            )}
        </div>
        </div>
    );
}
