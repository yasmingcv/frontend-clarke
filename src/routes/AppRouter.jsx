import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import Home from "../pages/Home/Home"
import Simulation from "../pages/Simulation/Simulation"
import Provider from "../pages/Provider/Provider"

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/simulation" element={<Simulation/>}/>
                <Route path="/provider" element={<Provider/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter