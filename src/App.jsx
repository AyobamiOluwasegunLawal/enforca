import React from 'react'
import Header from "./sections/Header.jsx";
import {Outlet} from "react-router";
import Footer from "./sections/Footer.jsx";


const App = () => {
    return (
        <div className={'overflow-hidden '}>
            <Header/>
            <main className={'relative' }>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default App
