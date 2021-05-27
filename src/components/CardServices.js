import React, { useState } from 'react';

export const CardServices = ({ title, imageMobile, imageDesktop }) => {

    const [screenWidth] = useState(window.innerWidth);

    return (
        <div className='card-service' style={{ backgroundImage: `url(${ screenWidth <= 960 ? imageMobile : imageDesktop })` }} >
            <div className="card-service__overlay">
                <p className='card-service__title' >{title}</p>
            </div>
        </div>
    )
}
