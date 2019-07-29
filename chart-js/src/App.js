import React, { Component } from 'react'
import { Line, Bar } from 'react-chartjs-2'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["Jun", "Jul", "Ago", "Set", "Oct"],
                datasets: [
                    {
                        label: "Paginas feitas",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [2, 3, 6, 9, 12]
                    },
                    {
                        label: "Paginas feitas apos gStudio",
                        backgroundColor: "rgba(0, 255, 0, 0.25)",
                        data: [3, 7, 9, 12, 15],
                    }
                ]
            }
        }
    }

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 600, 550)
        gradient.addColorStop(0, color)
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)")
        return gradient
    }

    getChartData = canvas => {
        const data = this.state.data
        if(data.datasets){
            let colors = ["rgba(255, 0, 255, 0.75)","rgba(0, 255, 0, 0.8)"]
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i])
                set.borderColor = "white"
                set.borderWidth = 2
            })
        } 
        return data
    }

    render() {
        return (
            <div style={{position:"relative", width: 600, height: 550}}>
                <h2>Let's go Line charts!</h2>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.getChartData}
                />
                <h2>Let's go Bar charts!</h2>
                <Bar
                    options={{
                        responsive: true
                    }}
                    data={this.getChartData}
                />
            </div>
        )
    }
}

