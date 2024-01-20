import CardProvider from '../../components/CardProvider/CardProvider'
import './style.css'

function Provider() {
    return (
        <div className="provider">
            <div className='provider__info'>
                <h2>Selecionamos esses fornecedores especialmente para você:</h2>
                <div className="providers">
                    <CardProvider/>
                    <CardProvider/>
                    <CardProvider/>
                    <CardProvider/>
                    <CardProvider/>
                    <CardProvider/>
                </div>
            </div>

        </div>
    )
}

export default Provider