import React from 'react'
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import {Link} from "react-router";

const Contact = () => {
    return (
        <section>

        <Section className={'text-center'}>
            <div className={'mt-24 space-y-5 mb-20 flex flex-col items-center'}>
                <h1 className={'leading-tight'}>
                    We’d Love to Hear From You!
                </h1>

                <p className={'text-gray-400 max-w-[30rem] mx-auto'}>
                    We architect scalable apps, build high-performance teams, and accelerate product growth.
                </p>
            </div>
        </Section>

            <div className={'bg-primary flex flex-col items-center justify-center h-80 p-20 gap-8 mb-32'}>
                    <h2 className={'text-white text-5xl font-semibold'}>
                        Interested in joining our team?
                    </h2>

                       <a href="mailto:info@mentor-techies.com" className={'text-black bg-white w-fit px-9 py-3 text-primary rounded-md'}>Send us an Email</a>
            </div>
        </section>
    )
}
export default Contact
