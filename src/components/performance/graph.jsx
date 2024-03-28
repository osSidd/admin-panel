import { Box, Paper, Typography } from '@mui/material'
import * as d3 from 'd3'
import { useEffect, useRef } from "react"

export default function Graph({feed, category, field, title}){
    const svgRef = useRef()

    function makeGraph(svgRef, feed, category, field){
        const height = 300
        const width = 350
        const paddingHorizontal = 50
        const paddingVertical = 25
        const svg = d3.select(svgRef.current)
        svg
            .attr('height', height)
            .attr('width', width)

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
            .style('font-size', '16px')
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
            .style('font-size', '16px')
            .style('color', '#777')

        const barContainer = svg.append('g')
        barContainer.selectAll('rect')
                    .data(feed)
                    .enter()
                    .append('rect')
                    .attr('height', d => height - paddingVertical - yScale(d[field]))
                    .attr('width', 35)
                    .attr('x', d => xScale(d[category]) + xScale.bandwidth()/4)
                    .attr('y', d => yScale(d[field]))
                    .attr('ry', 5)
                    .attr('fill', '#7367f0')
                    .style('cursor', 'pointer')
    }

    useEffect(() => {
        makeGraph(svgRef, feed, category, field)
    }, [feed, category, field, svgRef])

    return (
        <Paper sx={{px: 2, py:2}}>
            <Typography fontWeight={600}>{title}</Typography>
            <Box mt={2}>
                <svg ref={svgRef}></svg>
            </Box>
        </Paper>
    )
}