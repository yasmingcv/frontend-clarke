import './style.css'

function CardProvider() {
    return (
        <div className='card_provider'>

            {/* row */}
            <div className='provider_info'>

                {/* column */}
                <div className='info_main'>
                    <img src={require('../../assets/background.jpeg')} alt="logo da empresa" />
                    <p>900 clientes</p>
                </div>

                <span className='vertical_line'></span>

                {/* column */}
                <div className='general_info'>

                    {/* row */}
                    <div className='title'>

                        <h1>Enel - SP</h1>

                        <div className="rating">
                            <logoestrela />
                            4.6
                        </div>

                    </div>

                    {/* column */}
                    <div className='kwh_info'>
                        <p>R$400/kwh</p>
                        <p>Mínimo de 10000kwh</p>
                    </div>

                </div>

            </div>

            <span className='horizontal_line' />

        </div>

    )
}

export default CardProvider