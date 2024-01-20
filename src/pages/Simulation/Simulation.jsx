import { GrLinkNext } from "react-icons/gr"
import './style.css'
import { Link } from "react-router-dom"

function Simulation() {
    return (
        <div className="simulation">
            <div>
                <h2 className="simulation__text">Informe seu consumo mensal de energia em kw/h</h2>
                <input className="simulation__input" type="number" />
                <Link to='/provider'>
                    <GrLinkNext className="simulation__button"/>
                </Link>
                
            </div>
        </div>
    )
}

export default Simulation