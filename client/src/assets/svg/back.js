
import React from 'react'

const Back = ({ color }) => {
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="arrow_back_ios_black_24dp 1" clipPath="url(#clip0_87_292)">
            <path id="Vector" d="M16.6201 2.99006C16.1301 2.50006 15.3401 2.50006 14.8501 2.99006L6.54006 11.3001C6.15006 11.6901 6.15006 12.3201 6.54006 12.7101L14.8501 21.0201C15.3401 21.5101 16.1301 21.5101 16.6201 21.0201C17.1101 20.5301 17.1101 19.7401 16.6201 19.2501L9.38006 12.0001L16.6301 4.75006C17.1101 4.27006 17.1101 3.47006 16.6201 2.99006Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_87_292">
                <rect width="24" height="24" fill={color} />
            </clipPath>
        </defs>
    </svg>
    )
}

export default Back