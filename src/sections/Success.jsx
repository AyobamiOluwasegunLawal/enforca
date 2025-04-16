import React from 'react'
import team from "../assets/team-big.png"
import {successes} from "../constants/data.jsx";

const Success = () => {
    return (
        <section className={'max-w-[1400px] mx-auto bg-white text-black px-10 mb-30 overflow-hidden'}>
            <div className={'overflow-hidden mb-10'}>
                <p className={'text-primary mb-10 font-bold'}>
                    Our Key to Success
                </p>

                <h1 className={'text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-tight'}>
                    Local Impact, Global Tech Stack
                </h1>

            </div>

            <div className={'flex gap-16 flex-col md:flex-row relative'}>
                <div className={'basis-1/2'}>
                    <div className={'space-y-5 text-gray-500 text-md mb-24'}>
                        <p>
                            With deep roots in the startup and innovation ecosystem, Enforca Technologies partners with clients as a full-service technology solutions provider—guiding projects from concept to deployment and beyond.
                        </p>

                        <p>
                            Having successfully delivered diverse projects across industries, we craft end-to-end digital solutions that go beyond just building products—we align with your vision, team, and operational needs to create lasting impact. Our unique model—local expertise combined with global capabilities—allows us to deliver cutting-edge technology solutions at competitive rates without compromising quality.
                        </p>
                    </div>

                    <img src={team} alt={"team"}/>
                </div>

                <div className={'basis-1/2'}>
                   <div className={'space-y-5 text-gray-500 text-md mb-30'}>
                       <p>
                           We serve as the bridge between your business goals and world-class tech talent. At Enforca, we are committed to nurturing the next generation of digital professionals, providing hands-on experience to developers, designers, and product managers. Through our structured programs, we upskill dozens of talents each year to meet international standards, with plans to scale this impact significantly.
                       </p>

                       <p>
                           Successfully developed and currently managing the SaaS infrastructure for one of the fastest-growing startups.
                       </p>
                   </div>

                    <ul className={'flex flex-col gap-5 mb-20'}>
                        <div className={'space-x-2'}>
                            <span className={'blue-box'}/>
                            <li className={'text-gray-500 text-md'}>14+ developers actively engaged in client projects across multiple industries, with our team expanding each month.</li>
                        </div>

                        <div className={'space-x-2'}>
                            <span className={'blue-box'}/>
                            <li  className={'text-gray-500 text-md'}>4 developers dedicated to building and maintaining open-source, high-impact solutions that contribute to the global tech community.</li>
                        </div>

                    </ul>

                    {/*<div className={'block sm:hidden md:hidden lg:absolute lg:right-5 bg-blue-600/90 rounded-2xl lg:w-[49rem] px-8 py-12 lg:flex justify-evenly items-center max-lg:left-5'}>*/}
                    {/*    {successes.map((item, idx) => (*/}
                    {/*        <>*/}
                    {/*            <div className={'text-center text-white space-y-5'}>*/}
                    {/*                <h2 className={'text-xl sm:text-2xl md:text-5xl font-bold'}>{item.number}</h2>*/}
                    {/*                <p className={'text-md sm:text-lg text-gray-300 md:text-xl'}>{item.text}</p>*/}
                    {/*            </div>*/}

                    {/*            {idx !== successes.length - 1 && <div className={'hidden sm:block border border-white h-20 mx-5'}/>}*/}
                    {/*        </>*/}
                    {/*    ))}*/}
                    {/*</div>*/}


                </div>
            </div>

            {/*<div className={'hidden sm:flex sm:mt-10 lg:hidden bg-blue-600/90 rounded-2xl px-8 py-12 sm:justify-evenly sm:items-center'}>*/}
            {/*    {successes.map((item, idx) => (*/}
            {/*        <>*/}
            {/*            <div className={'text-center text-white space-y-5'}>*/}
            {/*                <h2 className={'text-xl sm:text-2xl md:text-5xl font-bold'}>{item.number}</h2>*/}
            {/*                <p className={'text-md sm:text-lg text-gray-300 md:text-xl'}>{item.text}</p>*/}
            {/*            </div>*/}

            {/*            {idx !== successes.length - 1 && <div className={'sm:block border border-gray-500 h-20 mx-5'}/>}*/}
            {/*        </>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </section>
    )
}
export default Success
