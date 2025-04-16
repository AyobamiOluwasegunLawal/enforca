import React from 'react'
import {solutions} from "../constants/data.jsx";
import { FaGreaterThan } from "react-icons/fa";

const SolutionItems = () => {
    return (
        <div className={'grid grid-cols-1 mdsm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 text-black place-items-center mb-20 px-10 place-content-center overflow-hidden'}>
            {
                solutions.map((item, idx) => (
                    <div key={idx} className={` px-10 py-6 max-mdsm:w-[400px] md:w-full max-sm:w-full shadow-lg rounded-lg h-50 w-70 flex flex-col items-start justify-center gap-3 ${idx === solutions.length - 1 && 'bg-blue-800 text-white'}`}>
                        <span className={`${item.className}`}>
                            {item.icon}
                        </span>

                        <h2 className={'font-bold text-xl'}>
                            {item.title}
                        </h2>

                        <p className={`text-gray-400 flex items-center gap-4`}>
                            {item.description}

                            {
                                idx === solutions.length - 1 && <span className={'size-10 rounded-md bg-primary text-white flex-center'}><FaGreaterThan/></span>
                            }

                        </p>
                    </div>
                ))
            }
        </div>
    )
}
export default SolutionItems
