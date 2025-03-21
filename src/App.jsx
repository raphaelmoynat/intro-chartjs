import {LineGraph} from './components/LineGraph.jsx'
import {BarChart} from './components/BarChart.jsx'
import {PieChart} from "./components/Pie.jsx";
import {StatsCard} from './components/StatsCard.jsx'

import {cartChartData, revenusData, topProductsData, userChartData, evolutionUsersData, statsData} from "./fake_data.js";

import './App.css'

function App() {
    return (
        <div className="container" >
            <div className="title">
                Dashboard e-commerce site
            </div>

            <div className="chart-row">
                <div className="chart-column">
                    <div className="chart-container">
                        <div className="chart-header">Statistiques globales</div>
                        <div className="chart-item">
                            <StatsCard stats={statsData}/>
                        </div>
                    </div>

                    <div className="chart-container">
                        <div className="chart-header">Analyse des paniers</div>
                        <div className="chart-item pie-chart">
                            <PieChart
                                data={cartChartData}
                                title="Statut des paniers"
                                legendPosition="top"
                            />
                        </div>
                    </div>

                    <div className="chart-container">
                        <div className="chart-header">Performance financière</div>
                        <div className="chart-item line-chart">
                            <LineGraph
                                data={revenusData}
                                title="Revenus nets en fonction des mois"
                                xAxisLabel="Mois"
                                yAxisLabel="Revenus nets (en €)"
                            />
                        </div>
                    </div>
                </div>

                <div className="chart-column">
                    <div className="chart-container">
                        <div className="chart-header">Ventes de produits</div>
                        <div className="chart-item">
                            <BarChart
                                data={topProductsData}
                                title="Meilleures ventes de produits"
                                xAxisLabel="Produits"
                                yAxisLabel="Nombre de produits"
                            />
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="chart-header">Taux de conversion</div>
                        <div className="chart-item pie-chart">
                            <PieChart
                                data={userChartData}
                                title="Pourcentage des utilisateurs convertis"
                                legendPosition="top"
                            />
                        </div>
                    </div>

                    <div className="chart-container">
                        <div className="chart-header">Évolution des conversions</div>
                        <div className="chart-item line-chart">
                            <LineGraph
                                data={evolutionUsersData}
                                title="Nombre d'utilisateurs convertis"
                                xAxisLabel="Mois"
                                yAxisLabel="Nombre d'users convertis (en milliers)"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default App