import { GrLinkNext } from "react-icons/gr"
import './style.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Swal from 'sweetalert2'

function Simulation() {
    const [kwhInput, setKwhInput] = useState('')
    const navigate = useNavigate()

    function sendKwh() {
        if (kwhInput === '' || kwhInput === '0') {
            Swal.fire({
                title: "Campo vazio!",
                text: "Preencha o campo de consumo mensal de energia para prosseguir.",
                icon: "error",
                confirmButtonText: 'OK'
            })
        } else {
            localStorage.setItem('kwh', kwhInput)
            navigate("/provider")
        }

    }

    return (
        <div className="simulation">
            <div>

                <h2 className="simulation__text">Informe seu consumo mensal de energia em kw/h</h2>
                <input className="simulation__input" type="number" value={kwhInput} onChange={(e) => { setKwhInput(e.target.value) }} />

                <GrLinkNext className="simulation__button" onClick={sendKwh} />




            </div>
        </div>
    )
}

export default Simulation