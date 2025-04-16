import React from 'react'
import logo from '../assets/enforcaImage.png'
import {contact} from "../constants/data.jsx";

const Footer = () => {
    return (
        <section className={'overflow-hidden mb-20 px-10'}>
            <footer className={'max-w-4xl mx-auto  flex flex-col md:flex-row justify-between'}>
                <div>
                    <div>
                        <img src={logo} alt={'logo'} className={'w-50 mb-6'}/>
                       <div className={'space-y-2'}>
                           <h2 className={'text-gray-400 font-bold '}>
                               Discover, Develop, Deploy!
                           </h2>

                           <p className={'text-gray-500 text-md max-w-sm'}>
                               Developing products, apps and the teams to grow
                               them, so that you can grow the business.
                           </p>
                       </div>
                    </div>
                </div>

                <ul className={'text-black'}>
                    {
                        contact.map(c => (
                            <li key={c.id} className={'text-md text-gray-500 space-y-3'}>
                                <h2 className={'font-bold text-lg'}>{c.header}</h2>
                                <div className={'space-y-2 '}>
                                    <p>{c.address}</p>
                                    <p>{c.address2}</p>
                                    <p>{c.number}</p>
                                    <p>{c.open}</p>
                                    <p>{c.email}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </section>
    )
}
export default Footer
