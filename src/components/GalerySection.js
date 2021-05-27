import React from 'react';
import { galleryData } from '../data/galleryData';
import { CardServices } from './CardServices';

export const GalerySection = () => {
    return (
        <section className='gallery-section' >
            <h2 className="gallery-section__title">
                Our Creations
            </h2>
            <ul className="gallery-section__gallery">
                {
                    galleryData.map( card => {
                        return (
                            <CardServices key={card.id}  {...card} />
                        )
                    })
                }
            </ul>
            <button className='gallery-section__button' >See All</button>
        </section>
    )
}
