import { createContext , useReducer , useContext , useEffect} from "react";
import Reducer from "./Reducer/Reducer";

const initialState = {
    watchList: JSON.parse(localStorage.getItem("watchList")) || [],
    watched: JSON.parse(localStorage.getItem("watched")) || [],
}

export const GlobalContext = createContext(initialState);

export function ContextProvider({children}){
    const [state , dispatch] = useReducer(Reducer,initialState);

    useEffect(()=>{
        localStorage.setItem("watchList",JSON.stringify(state.watchList));
        localStorage.setItem("watched",JSON.stringify(state.watched));
    },[state]);

    return (
        <GlobalContext.Provider value={{
            watchList: state.watchList,
            watched: state.watched,
            dispatch
            }}>
            {children}
        </GlobalContext.Provider>
    );
}



export const useMovieContext = ()=>{
    return useContext(GlobalContext);
}








