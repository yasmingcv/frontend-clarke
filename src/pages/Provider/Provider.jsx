import CardProvider from '../../components/CardProvider/CardProvider'
import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Provider() {

    const [providers, setProviders] = useState([])
    const [statusReq, setStatusReq] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        let kwh = localStorage.getItem('kwh')


        if (kwh === '' || kwh === '0') {
            navigate('/simulation')
        } else {
            const fetchProviders = async () => {
                try {
                    const response = await axios.get(`https://clarkeenergia.cyclic.app/providers?minimum_kwh=${kwh}`)
                    setProviders(response.data.data)

                    setStatusReq(true)

                    Swal.close()

                } catch (error) {
                    console.log('Erro ao buscar dados:', error)

                    Swal.fire({
                        title: "Ops! Não encontramos nenhum fornecedor :(",
                        confirmButtonText: "OK",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/simulation')
                        }
                    })
                }
            }

            fetchProviders()

        }




    }, [])


    return (

        <div className="provider">

            {
                statusReq ?
                    <div className='provider__info'>
                        <h2>Selecionamos esses fornecedores especialmente para você:</h2>
                        <div className="providers">
                            {
                                providers.map(provider => {
                                    return (
                                        <CardProvider key={provider.id} infoProvider={provider} />
                                    )
                                })
                            }
                        </div>
                    </div> : <>{Swal.showLoading()}</>

            } 

        </div>
    )
}

export default Provider