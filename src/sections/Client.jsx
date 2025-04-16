import React from 'react'
import { FaStar } from "react-icons/fa";
import geo from '../assets/geoffroy.png'

const Client = () => {
    return (
        <section className={'max-w-7xl mx-auto overflow-hidden mb-20'}>
            <div className={'flex-center flex-col overflow-hidden text-center mb-20 px-10'}>
                <p className={'text-primary mb-10 font-bold'}>
                    Don't take it from us
                </p>

                <h2 className={'text-3xl md:text-4xl lg:text-5xl text-black font-bold max-w-xl text-center leading-tight mb-5'}>
                    In service of our clients
                </h2>
            </div>

            <div className={' relative max-sm:max-w-sm bg-gray-100 p-10 max-w-2xl text-gray-700 mx-auto rounded-2xl mb-20 space-y-5 hover:bg-blue-700 hover:text-white transition ease-in-out duration-300'}>
                <img src={geo} alt={'profile pic'} className={'absolute inset-0 -inset-y-10 inset-x-10'}/>
                <p>
                    As a fast-growing SaaS in Belgium and France, it's important to have partners we can rely on. iTalanta handles our technology end-to-end. With support from their Belgian and global talent, we are able to deliver on our promise – offering the best real-estate management platform in the world!
                </p>

                <hr className={'border-gray-300'}/>

                <div className={'flex justify-between'}>
                    <p className={'font-bold'}>
                        Geoffroy Uyttenhove, CEO Syndic4you
                    </p>

                    <div className={'flex gap-2'}>
                        <FaStar className={'text-primary'}/>
                        <FaStar className={'text-primary'}/>
                        <FaStar className={'text-primary'}/>
                        <FaStar className={'text-primary'}/>
                        <FaStar className={'text-primary'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Client
