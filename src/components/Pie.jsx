import {Pie} from 'react-chartjs-2'
import {
    Chart as ChartJS, Legend, Tooltip, ArcElement
} from 'chart.js'
import {cartChartData} from "../fake_data.js";

ChartJS.register(
    Legend, Tooltip, ArcElement
);

export const PieChart=()=> {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 12
                    }
                }
            },
            title: {
                display: true,
                text: 'Statut des paniers',
                font: {
                    size: 18
                }
            },
        },
        maintainAspectRatio: true,
    }

    return (
        <div className="w-full h-full">
            <Pie options={options} data={cartChartData}/>
        </div>

    )
}

