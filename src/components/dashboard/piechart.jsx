import { Box, Paper, Typography } from '@mui/material'
import * as d3 from 'd3'
import { useEffect, useRef, useState } from "react"

export default function PieChart({feed, title}){
    
    const svgRef = useRef()
    const [screenWidth, setScreenWidth] = useState(768)

    function resize(x){
        if(x.matches) setScreenWidth(300)
        else setScreenWidth(1024)
    }

    function makeGraph(svgRef, feed){
        const height = 238
        const width = 300
        
        let x = window.matchMedia('(max-width:768px)')
        
        resize(x)
        
        x.addEventListener('change', () => {resize(x)})

        const svg = d3.select(svgRef.current)
        svg
            .attr('height', height)
            .attr('width', width)

        svg.selectAll('*').remove()

        const color = d3.scaleOrdinal(['green', 'orange'])
        const pie = d3.pie()
        const arc = d3.arc()
                    .innerRadius(60)
                    .outerRadius(100)
                    .padAngle(0.05)

        const arcs = svg.selectAll('arc')
                        .data(pie(feed.map(f => f.count)))
                        .enter()
                        .append('g')
                        .attr('transform', 'translate(200,130)')
        arcs.append('path')
            .attr('fill', (d,i) => color(i))
            .attr('d', arc)

        const text1 = svg.append('g')
        text1.selectAll('text')
            .data(feed)
            .enter()
            .append('text')
            .text(d => `${d.status} - ${d.count}`)
            .attr('x', 0)
            .attr('y', (d, i) => parseInt(i)*25 + 50)
            .attr('fill', (d) => color(d))
            .attr('stroke', 'none')
            .style('font-family', 'Roboto')
            .style('text-transform', 'capitalize')
            .style('font-weight', 500)
    }

    useEffect(() => {
        makeGraph(svgRef, feed)
    }, [feed, svgRef, screenWidth])

    return (
        <Paper sx={{px: 2, py:2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Typography textTransform='capitalize' fontWeight={600}>{title}</Typography>
            </Box>
            <Box>
                <svg ref={svgRef}></svg>
            </Box>
        </Paper>
    )
}
