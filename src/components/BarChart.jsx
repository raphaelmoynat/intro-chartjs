import {Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const BarChart = ({
                             data,
                             title = "Graphique",
                             xAxisLabel = "X",
                             yAxisLabel = "Y",
                             showLegend = false
                         }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: showLegend,
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 18
                }
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: xAxisLabel,
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: yAxisLabel,
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 12
                    }
                }
            },
        },
        maintainAspectRatio: false,
    }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Bar options={options} data={data} />
        </div>
    )
}