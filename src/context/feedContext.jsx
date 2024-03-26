import { createContext, useReducer } from "react";
import initialState from '../static/feed'

export const FeedContext = createContext()

const reducer = (state, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default function FeedContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        feed: initialState
    })

    return (
        <FeedContext.Provider value={{...state, dispatch}}>
            {children}
        </FeedContext.Provider>
    )
}