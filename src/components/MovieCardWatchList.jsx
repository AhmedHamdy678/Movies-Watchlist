import MovieControlls from "./MovieControlls";

export default function MovieCardWatchList({ film, type }) {
    return (
        <div className="film-card">
            <div className="over-lay">
                {film.Poster ? (
                    <img src={film.Poster} alt={film.Title} />
                ) : (
                    <div className="filter-poster"></div>
                )}

                <MovieControlls film={film} type={type} />
            </div>
        </div>
    );
}
