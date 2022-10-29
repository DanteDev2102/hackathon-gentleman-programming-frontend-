import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom"
import { Header } from "../components/Header";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Profile } from "../page/Profile";
import { PuestosLaborales } from "../page/PuestosLaborales";
import { Register } from "../page/Register";

export interface RouterInterface {}

const Router : React.FC<RouterInterface> = () => {
	return (
        <BrowserRouter >
        
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/puestoslaborales' element={<PuestosLaborales />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        
        </BrowserRouter>
    )
};

export default Router;
