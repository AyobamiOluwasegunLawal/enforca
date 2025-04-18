import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import jente from "../assets/jente-2.png"

const Impact = () => {
    return (
        <div  className={'bg-gray-100 py-20 mb-20 overflow-hidden'}>
            <section  className={'max-w-7xl mx-auto relative'}>
                <div className={'overflow-hidden mb-5 px-10 '}>

                   <div className={'flex flex-col md:flex-row justify-start md:gap-50 '}>
                       <div className={'basis-1/2 max-sm:mt-60'}>
                           <p className={'text-primary sm:mb-10 font-bold'}>
                               Where Quality meets Impact
                           </p>
                           <h2 className={'text-3xl md:text-4xl lg:text-5xl text-black font-bold max-w-xl leading-tight mb-5'}>
                               Our Commitment
                           </h2>

                           <div className={'space-y-5 mb-8'}>
                               <p className={'overflow-hidden text-gray-400 max-w-xl'}>
                                   While many regions face a shortage of skilled tech professionals, Africa—particularly West Africa—boasts a rapidly growing pool of talented and driven individuals who often lack access to meaningful opportunities.
                               </p>

                               <p className={'overflow-hidden text-gray-400 max-w-xl'}>
                                   At Enforca Technologies, our vision is to bridge this gap. Over the next five years, we aim to create world-class career opportunities for over 1,000 highly motivated youths, equipping them with practical experience and international standards of excellence. Our focus on quality, innovation, and impact ensures that the talent we nurture is not only globally competitive but also shaping the future of technology.
                               </p>
                           </div>

                           <p className={'text-primary mb-10 font-bold'}>
                               Learning how we are making this happen
                           </p>
                       </div>

                       <div className={'basis-1/2 '}>
                            <div>
                                <h2 className={'text-primary mb-10 font-bold'}>
                                    Jente Rosseel
                                </h2>

                               <div >
                                   <p className={'text-gray-600 w-[15rem]'}>
                                       Co-Founder, Computer Scientist, Teacher & Lead Engineer
                                   </p>

                               </div>
                            </div>

                           <div className={'flex gap-4'}>
                               <FaLinkedin className={'text-primary'}/>
                               <FaGithub className={'text-primary'}/>
                           </div>
                       </div>

                   </div>
                </div>
                <img src={jente} alt={"jente picture"} className={'absolute right-0 -top-10'}/>


            </section>
        </div>

    )
}
export default Impact
