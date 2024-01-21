import './style.css'
import { FaStar } from "react-icons/fa";

function CardProvider({ infoProvider }) {

    console.log(infoProvider);

    return (
        <div className='card_provider'>

            <div className='provider_info'>

                <div className='info_main'>
                    <img src={infoProvider.logo} alt="logo da empresa" />
                    <p>{infoProvider.total_clients} clientes</p>
                </div>

                <span className='vertical_line'></span>

                <div className='general_info'>

                    <div className='title'>

                        <h1>{infoProvider.name} - {infoProvider.state}</h1>

                        <div className="rating">
                            <FaStar color='#FFB800' size='1.3rem'/>
                            {infoProvider.average_rating}
                        </div>

                    </div>

                    <div className='kwh_info'>
                        <p>R${infoProvider.cost_per_kwh}/kwh</p>
                        <p>Mínimo de {infoProvider.minimun_kwh_limit}kwh</p>
                    </div>

                </div>

            </div>

            <span className='horizontal_line' />

        </div>

    )
}

export default CardProvider