import React from 'react'
import Section from "../components/Section.jsx";
import siwes from "../assets/siwes.webp";
import { FaArrowCircleDown } from "react-icons/fa";

const SiwesInternship = () => {
    return (
        <section>
            <Section className={'bg-gray-100 mb-20'}>
                <div className={'space-y-5 mb-5 flex flex-col md:flex-row flex-between px-20'}>
                    <div className={'mt-52 space-y-5'}>
                        <h1>
                            Empowering Talent, Driving Innovation
                        </h1>

                        <p className={'text-gray-400 text-xl max-w-[50rem] mx-auto'}>
                            Enforca Technologies is a global tech enabler committed to developing Africa’s next generation of digital professionals.
                            We help individuals grow their skills through hands-on experience, mentorship, and real-world projects—unlocking potential and building future-ready talent.
                        </p>

                        <div className={'mt-10 w-fit flex flex-col items-center space-y-2'}>
                            <p className={'text-primary font-bold text-left'}>
                                Interested? Send us a mail
                            </p>
                            <FaArrowCircleDown className={'animate-bounce text-primary size-6'}/>
                            <a href="mailto:info@mentor-techies.com" className={'text-black bg-primary w-fit py-2 px-4 text-white rounded-md'}>Send Email</a>
                        </div>
                    </div>

                    <div className={'mt-32'}>
                        <img src={siwes} alt={'siwes picture'}/>
                    </div>
                </div>
            </Section>
        </section>
    )
}
export default SiwesInternship
