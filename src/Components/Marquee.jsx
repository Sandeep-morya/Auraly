import React from 'react'

const Marquee = ({ children }) => {
    return (
        <marquee loop>{children}</marquee>
    )
}

export default Marquee