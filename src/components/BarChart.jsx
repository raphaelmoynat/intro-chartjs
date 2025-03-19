import {Bar, Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, PointElement,
} from 'chart.js'
import {topProductsData} from "../fake_data.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const BarChart=()=> {
    const options = {

        plugins: {
            legend: {
               display: false,
            },
            title: {
                display: true,
                text: 'Meilleures ventes par produit',
                font: {
                    size: 18
                }
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Produits',
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
                    text: 'Nombre d\'unités vendues',
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
        <div className="w-full lg:w-1/2 mx-auto">
            <Bar options={options} data={topProductsData}/>
        </div>

    )
}

