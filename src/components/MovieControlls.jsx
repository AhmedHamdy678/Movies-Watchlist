import { useMovieContext } from "./MoviesContext";
import * as actions from "./Reducer/ActionsType";


export default function MovieControlls({film, type}) {
    const { dispatch } = useMovieContext();

    return (
        <div className="inner-card-controlls">
            {
                type === "watchlist" && (
                    <>
                        <button onClick={()=>{
                            dispatch({type: actions.ADD_MOVIE_TO_WATCHED, payload: film});
                        }} className="control-btn">
                            <i className=" fa-solid fa-eye"></i>
                        </button>

                        <button onClick={()=>{
                            dispatch({type: actions.REMOVE_MOVIE_FROM_WATCHLIST, payload: film.imdbID})
                        }} className="control-btn">
                            <i className=" fa-fw fa fa-times"></i>
                        </button>
                    </>
                ) 
            }

            {
                type === "watched" && (
                    <>
                        <button onClick={()=>{
                            dispatch({type: actions.MOVE_TO_WATCHLIST , payload: film})
                        }} className="control-btn">
                            <i className=" fa-solid fa-eye-slash"></i>
                        </button>

                        <button onClick={()=>{
                            dispatch({type: actions.REMOVE_FROM_WATCHED , payload: film.imdbID});
                        }} className="control-btn">
                            <i className=" fa-fw fa fa-times"></i>
                        </button>
                    </>
                ) 
            }
        </div>
    )
}
