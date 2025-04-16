import React from 'react'
import Hero from "../sections/Hero.jsx";
import Solution from "../sections/Solution.jsx";
import Success from "../sections/Success.jsx";
import Impact from "../sections/Impact.jsx";
import Client from "../sections/Client.jsx";

const Home = () => {
    return (
       <section className={'overflow-hidden'}>
           <Hero/>
           <Solution/>
           <Success/>
           <Impact/>
           <Client/>
       </section>
    )
}
export default Home
