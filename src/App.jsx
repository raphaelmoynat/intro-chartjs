import {LineGraph} from './components/LineGraph.jsx'
import {BarChart} from './components/BarChart.jsx'
import {PieChart} from "./components/Pie.jsx";

import './App.css'

function App() {
    return (
        <div className="container">
            <div className="column-left">
                <div className="chart-container">
                    <div className="chart-item">
                        <BarChart/>
                    </div>
                    <div className="">
                        <PieChart/>
                    </div>
                    <div className="">
                        <LineGraph/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App


