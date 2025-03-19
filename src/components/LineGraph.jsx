import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {revenusData} from "../fake_data.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);
export const LineGraph = () => {

    const options = {

    }

    return (
        <div style={{ width: '950px', height: '450px' }}>
            <Line options={options} data={revenusData}/>
        </div>
    )
}

