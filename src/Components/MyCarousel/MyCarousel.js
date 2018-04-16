import React from 'react';
import { Carousel } from 'react-bootstrap';

import "./MyCarousel.css";

import * as kettleImage from  './martin-knize-39793-unsplash.jpg';
import * as drinkerImage from  '././robert-mathews-168904-unsplash.jpg';
import * as tapsImage from  './sam-hetterich-578690-unsplash.jpg';


const MyCarousel = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img alt="kettle" src={kettleImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="drinking" src={drinkerImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="taps" src={tapsImage} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
