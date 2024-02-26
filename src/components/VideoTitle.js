import React from 'react'

const VideoTitle = ({ title, description }) => {
    return (
        <div className='pt-40 px-16 text-white absolute' >
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-2/4'>{description}</p>
            <div>
                <button className='p-2 px-10 bg-gray-400 text-lg rounded-md'> ▶ Play</button>
                <button className='p-2 px-10 bg-gray-400 text-lg ml-4 rounded-md'>! More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle