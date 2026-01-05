import { useMovieContext } from "./MoviesContext";
import MovieCardWatchList from "./MovieCardWatchList";
import "./WatchList.css";

export default function WatchList() {
    const { watched } = useMovieContext();
    return (
        <div className="watch-list">
            <div className="container">
                <div className="main-heading">
                <h1>My Watched </h1>
                <span className="movies-count">{watched?.length || 0} Movies</span>
                </div>
                {watched && watched.length > 0 ? (
                <div className="movie-grid">
                    {watched.map((film) => (
                    <MovieCardWatchList
                        key={film.imdbID}
                        film={film}
                        type="watched"
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
