
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  

  return (
    <>
        <nav className="flex justify-between items-center w-full p-4 bg-white ">
            <div className="hover:cursor-pointer">
                <ul className="flex items-center">
                    <NavLink to = "/">
                    <li className="mr-8 ">
                        <h1 className="font-bold text-3xl text-cyan-500 ">TextUtlies</h1>
                    </li>
                    </NavLink>
                    <NavLink to='/'>  <li className="mr-4 font-bold text-lg">Home</li></NavLink>
                    <NavLink to='about'> <li className="mr-4 font-bold text-lg">About Us</li></NavLink>
                    <NavLink to='contact'>  <li className="mr-4 font-bold text-lg">Contact</li></NavLink>
                  
                   
                  
                </ul>
            </div>
            <div className=" flex items-center justify-center hover:cursor-pointer">
                <input type="checkbox"/>
                <p className="ml-2 font-bold ">Dark Mode Enable</p>
            </div>
           
        </nav>
    </>
  )
}
