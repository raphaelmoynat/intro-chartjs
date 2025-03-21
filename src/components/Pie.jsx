import {Pie} from 'react-chartjs-2'
import {
    Chart as ChartJS, Legend, Tooltip, ArcElement
} from 'chart.js'
import {cartChartData} from "../fake_data.js";

ChartJS.register(
    Legend, Tooltip, ArcElement
);

export const PieChart = ({ data, title = "Graphique", legendPosition = "top" }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                position: legendPosition,
                labels: {
                    font: {
                        size: 12
                    },
                    boxWidth: 15,
                    padding: 10
                }
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 18
                },
                padding: {
                    top: 5,
                    bottom: 5
                }
            },
        },
    }

    return (
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <Pie options={options} data={data} />
        </div>
    )
}
