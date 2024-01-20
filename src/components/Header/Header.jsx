import { Link } from "react-router-dom"
import './style.css'

function Header(){
    return(
        <header>
            <Link to='/'>
                <img src={require('../../assets/clarkelogo.png')} alt="clarke energia - logo"/>
            </Link>
            <Link to='/simulation' className="header__button">Consulte nossos fornecedores</Link>
        </header>
    )
}

export default Header