import { Box } from "@mui/material";

import performance from '../assets/performance.jpeg'
import manage from '../assets/manage.jpeg'
import create from '../assets/create.jpeg'

import useFeedContext from "../hooks/useFeedContext";
import QuickLink from "../components/dashboard/quickLink";
import FeedTable from "../components/feedTable";
import Graph from "../components/performance/graph";
import PieChart from "../components/dashboard/piechart";

export default function Dashboard(){

    const {feed} = useFeedContext()

    function statusMetrics(feed){
        const statusObj = {published: 0, draft: 0}
        const statusArr = []
        feed.forEach(f => {
            if(f.status === 'Draft') statusObj.draft += 1
            else statusObj.published += 1
        })
        for(let i in statusObj){
            statusArr.push({status: i, count: statusObj[i]})
        }
        return statusArr
    }

    function countFeed(feed){
        const dateObj = {}
        const dateArr = []
        let count = 0
        feed.forEach(f => {
            if (f.createdAt in dateObj){
                dateObj[f.createdAt] += 1
            }
            else{
                dateObj[f.createdAt] = 1
            }
        })
        for(let i in dateObj){
            dateArr.push({id: count, createdAt: i, feedCount: dateObj[i]})
            count++
        }
        return dateArr
    }

    const statusArr = statusMetrics(feed)
    const feedCount = countFeed(feed)

    return (
        <Box display='flex' alignItems='center' flexWrap='wrap' justifyContent='space-evenly' rowGap={{xs:4, lg:0}}>
                        
            <PieChart feed={statusArr} title='Feed status'/>

            <Graph feed={feedCount} category='createdAt' field='feedCount' title='Date wise variation of feeds created' graphColor='#7367f0' lineGraph={true} lineCurve={false}/>

            <Box width='100%' mt={4} display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap' rowGap={{xs:4, lg:0}}>
                <QuickLink title='Performance' link='/performance' img={performance}/>
                <QuickLink title='Manage feeds' link='/news-feed/manage' img={manage}/>
                <QuickLink title='Create feed' link='/news-feed/create' img={create}/>
            </Box>
            
            <Box mt={4} width='100%'>
                <FeedTable
                    cols={['title', 'category', 'createdAt', 'views', 'likes', 'comments']}
                    actions={{view: true, edit:false, delete: false}}
                />
            </Box>
            
        </Box>
    )
}