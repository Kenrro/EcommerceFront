import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import "./home.css"

export const HomeLayout = () => {
    return(
        <div className="wrap-home">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    )
}