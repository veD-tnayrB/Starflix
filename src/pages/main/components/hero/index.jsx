import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { apiImageURL } from 'services/api';

import './hero.scss';

const Hero = ({ item = {poster: '', backdrop: '', title: '', overview: ''} }) => {

    const heroStyle = {
        background: `url(${apiImageURL}${item.backdrop}) no-repeat center`
    }

    return (
        <section 
         className="hero"
         style={heroStyle}
        >
            <div className="info-container">
                <h2>{item.title}</h2>
                <div className="overview-container">
                    <p>
                        {item.overview}
                    </p>
                </div>

                <button className="secondary-button">
                    <InfoIcon className="info-icon" />
                    More Info
                </button>
            </div>

        </section>
    )
}

export default Hero;