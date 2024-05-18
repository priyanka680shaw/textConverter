import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"
import { MainScreen } from "../MainScreen/MainScreen"
export const Layout = () => {
  return (
    <>
    <div className="w-full h-auto bg-blue-100">
    <Navbar/>
        <Outlet/>
        
        <Footer/>
    </div>
       

    </>
  )
}
