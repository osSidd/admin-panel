import { createContext, useReducer } from "react";
import initialState from '../static/feed'

export const FeedContext = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_FEED':
            return {
                ...state,
                feed: [...state.feed, {...action.payload, id: state.feed.length}]
            }
        case 'EDIT_FEED':
            return {
                ...state,
                feed_edit: state.feed.find(f => f.id === action.payload)
            }
        case 'UPDATE_FEED':
            return {
                ...state,
                feed: state.feed.map(f => {
                    return f.id === action.payload.id ? action.payload.feed : f
                })
            }
        case 'DELETE_FEED':
            return {
                ...state,
                feed: state.feed.filter(f => f.id !== action.payload)
            }
        default:
            return state
    }
}

export default function FeedContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        feed: initialState,
        feed_edit: undefined,
    })

    return (
        <FeedContext.Provider value={{...state, dispatch}}>
            {children}
        </FeedContext.Provider>
    )
}