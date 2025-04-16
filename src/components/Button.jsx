import React from 'react'

const Button = ({content, className, onclick}) => {
    // px-9 py-3
    return (
        <button onClick={onclick} className={`rounded-full sm:block font-bold outline-none cursor-pointer w-fit ${className}`}>
            {content}
        </button>
    )
}
export default Button
