import React from 'react'

const BookOpened = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="book opened">
                <path id="Icon" d="M12 20.9052V5.31353M12 20.9052C12 20.9756 12.0763 21.0214 12.1411 20.9899L13.7681 20.1999C15.4879 19.3648 17.5121 19.3648 19.2319 20.1999C20.0442 20.5943 21 20.0207 21 19.1387V5.31353C21 4.90897 20.8039 4.52803 20.4706 4.28529C18.1176 2.57157 14.8824 2.57157 12.5294 4.28529C12.1961 4.52803 12 4.90897 12 5.31353M12 20.9052C12 20.9756 11.9237 21.0214 11.8589 20.9899L10.2319 20.1999C8.51212 19.3648 6.48788 19.3648 4.76811 20.1999C3.95578 20.5943 3 20.0207 3 19.1387V5.31353C3 4.90897 3.19614 4.52803 3.52941 4.28529C5.88235 2.57157 9.11765 2.57157 11.4706 4.28529C11.8039 4.52803 12 4.90897 12 5.31353" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </g>
        </svg>

    )
}

export default BookOpened