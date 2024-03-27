import { useContext } from "react";
import { FeedContext } from "../context/feedContext";

export default function useFeedContext(){
    const {feed, feed_edit, dispatch} = useContext(FeedContext)
    return {feed, feed_edit, dispatch}
}