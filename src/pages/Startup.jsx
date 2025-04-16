import React from 'react'
import Section from "../components/Section.jsx";
import aboutImg from "../assets/aboutImg.webp";

const Startup = () => {
    return (
        <section>

            <Section className={'bg-gray-100 mb-20 text-center'}>
                <div className={'mt-24 space-y-5 mb-20 flex flex-col items-center px-10'}>
                    <h1 className={'text-canter leading-tight max-md:text-3xl'}>
                        Empowering Startups to Build, Scale, and Succeed
                    </h1>

                    <p className={'text-gray-400 text-md max-w-[50rem] mx-auto'}>
                        Enforca Technologies partners with startups to turn bold ideas into powerful digital products—combining expert talent, real-world experience, and scalable solutions.

                    </p>
                </div>
            </Section>
        </section>
    )
}
export default Startup
