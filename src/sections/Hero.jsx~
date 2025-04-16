import React from 'react'
import Header from "./Header.jsx";
import welcomeMan from "../assets/welcome-man-l3.png"
import welcomeWoman from "../assets/welcome-woman-l3.png"
import {Link} from "react-router";

const Hero = () => {
    return (
        <section className={'overflow-hidden'}>
            <div className={'bg-white min-h-[calc(100vh-800px)] s:min-h-[calc(100vh-700px)] md:min-h-[calc(100vh-700px)] lg:min-h-[calc(100vh-400px)] xl:min-h-[calc(100vh-220px)] relative'}>
                <div className={'hidden lg:block overflow-hidden'}>
                    <div className={'medium:block'}>
                        <img src={welcomeMan} alt={'man'} className={'absolute md:-right-20 md:w-[350px] md:h-[500px] md:bottom-0 xl:w-[520px] xl:h-[730px] xl:right-0 z-1'}/>
                        <img src={welcomeWoman} alt={'man'} className={'absolute md:right-24 md:w-[350px] md:h-[520px] md:bottom-0 xl:w-[520px] xl:h-[780px] xl:right-80 z-1'}/>
                    </div>
                </div>

                <div className={'max-w-[1400px] mt-32 mx-auto lg:mt-40 xl:mt-52'}>

                    <div className={'text-black px-4 flex flex-col   gap-7 xs:px-8 sm:max-w-xl sm:mx-auto lg:mx-0'}>
                        <p className={'text-primary font-semibold text-left'}>
                            Ideate, Build, Launch
                        </p>

                        <h1>
                            Local Impact, Global Tech Stack
                        </h1>

                        <p className={'text-gray-400 max-w-[30rem]'}>
                            We architect scalable apps, build high-performance teams, and accelerate product growth.
                        </p>

                        <div className={'flex flex-col xs:flex-row justify-start lg:justify-start gap-5 max-sm:mb-10'}>
                            <Link to={'/Contact'} className={'px-9 py-3 font-bold rounded-full border-1 border-primary bg-primary text-white transition duration-100 ease-in text-black'}>Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
