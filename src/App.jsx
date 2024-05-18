import { Layout } from "./Components/HeaderFooter/Layout";
import ContactUs from "./Components/Contact/Contact";
import AboutPage from "./Components/About/About";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import { MainScreen } from "./Components/MainScreen/MainScreen";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<Layout/>}>
        <Route path="" element = {<MainScreen/>}/>
        <Route path="contact" element = {<ContactUs/>}/>
        <Route path="about" element = {<AboutPage/>}/>
      </Route>
    )
  )

  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router}></RouterProvider>
      
     
    </>
  )
}

export default App
