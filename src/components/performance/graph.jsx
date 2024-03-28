import { Box, Button, Paper, Typography } from '@mui/material'
import * as d3 from 'd3'
import { useEffect, useRef, useState } from "react"


export default function Graph({feed, category, field, title, graphColor, lineGraph=false, toggleVariation=undefined}){
    
    const svgRef = useRef()
    const [screenWidth, setScreenWidth] = useState(768)

    function resize(x){
        if(x.matches) setScreenWidth(300)
        else setScreenWidth(1024)
    }

    function makeGraph(svgRef, feed, category, field){
        const height = 238
        const width = screenWidth <= 768 ? 300 : (lineGraph ? 500 : 350)
        const paddingHorizontal = screenWidth <= 768 ? 40 : 50
        const paddingVertical = 25
        const fontSize = screenWidth <= 768 ? '12px' : '16px'
        
        let x = window.matchMedia('(max-width:768px)')
        
        resize(x)
        
        x.addEventListener('change', () => {resize(x)})

        const svg = d3.select(svgRef.current)
        svg
            .attr('height', height)
            .attr('width', width)

        svg.selectAll('*').remove()

        const xScale = d3.scaleBand().range([paddingHorizontal, width-(paddingHorizontal/2)]).domain(feed.map(f => f[category]))
        const yScale = d3.scaleLinear().range([height-paddingVertical, paddingVertical]).domain([0, d3.max(feed.map(f => f[field]))])

        const bottomAxis = d3.axisBottom(xScale)
        const leftAxis = d3.axisLeft(yScale).ticks(6).tickSize(width-1.5*paddingHorizontal).tickPadding(15)

        const xAxis = svg.append('g')
                        .attr('transform', `translate(0, ${height-paddingVertical})`)
                        .call(bottomAxis)
        xAxis.selectAll('path')
            .style('display', 'none')
        xAxis.selectAll('line')
            .style('display', 'none')
        xAxis.selectAll('text')
            .style('font-family', 'Roboto')
            .style('font-size', fontSize)
            .style('color', '#777')

        const yAxis = svg.append('g')
                        .attr('transform', `translate(${width - (paddingHorizontal/3)}, 0)`)
                        .call(leftAxis)
        yAxis.selectAll('path')
            .style('display', 'none')
        yAxis.selectAll('line')
            .style('stroke', '#dedede')
        yAxis.selectAll('text')
            .style('font-family', 'Roboto')
            .style('font-size', fontSize)
            .style('color', '#777')

        const barContainer = svg.append('g')
        !lineGraph && barContainer.selectAll('rect')
                    .data(feed)
                    .enter()
                    .append('rect')
                    .attr('height', d => height - paddingVertical - yScale(d[field]))
                    .attr('width', 35)
                    .attr('x', d => xScale(d[category]) + xScale.bandwidth()/4)
                    .attr('y', d => yScale(d[field]))
                    .attr('ry', 5)
                    .attr('fill', graphColor)
                    .style('cursor', 'pointer')

        const line = d3.line()
                    .x(d => xScale(d[category])+xScale.bandwidth()/2)
                    .y(d => yScale(d[field]))
                    .curve(d3.curveBasis)
    
        const curve = lineGraph && svg.append('path')
                            .datum(feed)
                            .attr('d', line)
                            .attr('fill', 'none')
                            .attr('stroke', graphColor)
                            .attr('stroke-width', 2)
    }

    useEffect(() => {
        makeGraph(svgRef, feed, category, field)
    }, [feed, category, field, svgRef, screenWidth])

    return (
        <Paper sx={{px: 2, py:2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Typography textTransform='capitalize' fontWeight={600}>{title}</Typography>
                {
                    toggleVariation && 
                        <Box>
                            <Button variant={field==='views'?'contained':'text'} onClick={() => toggleVariation('views')} color='primary'>views</Button>
                            <Button variant={field==='comments'?'contained':'text'} onClick={() => toggleVariation('comments')} color='warning'>comments</Button>
                            <Button variant={field==='likes'?'contained':'text'} onClick={() => toggleVariation('likes')} color='success'>likes</Button>
                        </Box>
                }
            </Box>
            <Box mt={2}>
                <svg ref={svgRef}></svg>
            </Box>
        </Paper>
    )
}
