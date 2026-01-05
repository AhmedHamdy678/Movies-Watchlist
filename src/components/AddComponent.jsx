import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function AddComponent() {
    const [films, setFilms] = useState([]);
    const [nameOfFilm, setNameOfFilm] = useState("");

    function handleChange(e) {
        setNameOfFilm(e.target.value);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
        axios
            .get(`https://www.omdbapi.com/?s=${nameOfFilm}&apikey=89eb300a`)
            .then((response) => {
                setFilms(response.data.Search || []);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, 500);

    return () => clearTimeout(timer);
    }, [nameOfFilm]);

    return (
        <div className="add-component">
            <div className="container">
                <div className="search">
                    <input
                    value={nameOfFilm}
                    type="text"
                    placeholder="Enter Film Name"
                    onChange={handleChange}
                    />
                </div>

                <div className="films">
                    {nameOfFilm && (
                    <div className="results-header">
                        {films.length > 0 && (
                        <span className="results-count">
                            {films.length} Movies Found
                        </span>
                        )}
                    </div>
                    )}
                    {films.length > 0 ? (
                    films.map((film) => (
                        <div key={film.imdbID}>
                        <MovieCard film={film} />
                        </div>
                    ))
                    ) : nameOfFilm ? (
                    <h3>No movies found. Try a different search term.</h3>
                    ) : (
                    <h3>Start typing to search for movies...</h3>
                    )}
                </div>
            </div>
        </div>
    );
}
