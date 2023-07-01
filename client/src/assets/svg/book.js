import React from 'react'

const Book = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="book">
                <path id="Icon" d="M18 16H7C5.34315 16 4 17.3431 4 19M18 16V22M18 16C19.1046 16 20 15.1046 20 14V4C20 2.89543 19.1046 2 18 2H7C5.34315 2 4 3.34315 4 5V19M20 22H18M18 22H7C5.34315 22 4 20.6569 4 19" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </g>
        </svg>
    )
}

export default Book