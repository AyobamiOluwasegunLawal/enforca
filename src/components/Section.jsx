import React from 'react'

const Section = ({children, className}) => {
    return (
        <section className={`${className}`}>
            <div className={'max-w-[1400px] mx-auto flex justify-center flex-col'}>
                {children}
            </div>
        </section>
    )
}
export default Section
