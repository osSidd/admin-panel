import FeedTable from "../components/feedTable";

export default function ManageFeed(){
    return(
        <FeedTable
            cols={['title', 'category', 'createdAt', 'status']}
            actions={{view: true, edit: true, delete: true}}
        />
    )
}