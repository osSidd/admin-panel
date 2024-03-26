import { useContext } from "react";
import { FeedContext } from "../context/feedContext";

export default function useFeedContext(){
    const {feed, dispatch} = useContext(FeedContext)

    return {feed, dispatch}
}