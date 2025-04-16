import React from 'react'
import SolutionItems from "../components/SolutionItems.jsx";
const Solution = () => {
    return (
        <div className={'bg-gray-100 py-20 mb-20 overflow-hidden'}>
            <section className={'max-w-[1400px] mx-auto overflow-hidden '}>
                <div className={'flex-center flex-col overflow-hidden text-center mb-20 px-10'}>
                    <p className={'text-primary mb-10 font-bold'}>
                        What we do
                    </p>

                    <h2 className={'text-3xl md:text-4xl lg:text-5xl text-black font-bold max-w-xl text-center leading-tight mb-5'}>
                        Scalable Code, Solid Results.
                    </h2>

                    <p className={'overflow-hidden text-gray-400 max-w-xl'}>
                        We build fast, reliable solutions with smart architecture and top-tier dev teams.
                    </p>
                </div>

                <SolutionItems/>
            </section>
        </div>
    )
}
export default Solution
