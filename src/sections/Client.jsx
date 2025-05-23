import React from 'react'
import { FaStar } from "react-icons/fa";
import geo from '../assets/geoffroy.png'
import {testimonials} from "../constants/data.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination,Navigation } from "swiper/modules";

const Client = () => {
    return (
        <section className={'max-w-7xl mx-auto overflow-hidden mb-20'}>
            <div className={'flex-center flex-col overflow-hidden text-center mb-20 px-10'}>
                <p className={'text-primary mb-10 font-bold'}>
                    Don't take it from us
                </p>

                <h2 className={'text-3xl md:text-4xl lg:text-5xl text-black font-bold max-w-xl text-center leading-tight mb-5'}>
                    What our clients say
                </h2>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },

                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                   {
                       testimonials.map(testimonial => (

                           <SwiperSlide key={testimonial.id} className={'space-y-3 '}>
            <div className={' relative max-sm:max-w-sm bg-blue-100 p-10 h-auto max-w-2xl text-gray-700 mx-auto rounded-2xl space-y-5 hover:bg-blue-700 hover:text-white transition ease-in-out duration-300'}>
                {/*<img src={geo} alt={'profile pic'} className={'absolute inset-0 -inset-y-10 inset-x-10'}/>*/}
                               <p >
                                   {testimonial.comment}
                               </p>

                               <hr className={'border-gray-300'}/>

                               <div className={'flex justify-between'}>
                                   <div>
                                       <p className={'font-bold'}>
                                           {testimonial.client}
                                       </p>

                                       <span className={'text-sm'}>{testimonial.location}</span>
                                   </div>

                                   <div className={'flex gap-2'}>
                                       {testimonial.star}
                                   </div>
                               </div>
            </div>
                           </SwiperSlide>
                       ))
                   }

            </Swiper>
        </section>
    )
}
export default Client
