import {createBrowserRouter} from "react-router";
import App from '../App.jsx'
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import Startup from "../pages/Startup.jsx";
import SiwesInternship from "../pages/SiwesInternship.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },

            {
                path: "/About",
                element: <About/>
            },

            {
                path: "/Contact",
                element: <Contact/>
            },

            {
                path: "/Startup",
                element: <Startup/>
            },

            {
                path: "/SiwesInternship",
                element: <SiwesInternship/>
            }
        ]
    },




]);

export default router