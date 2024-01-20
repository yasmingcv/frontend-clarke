import './style.css'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className='home'>
            <h3 className='home__text'>Economize até 40% na conta de luz da sua empresa sem precisar investir.</h3>
            <Link to='/simulation' className='home__button'>Faça uma simulação</Link>
        </div>
    )
}

export default Home