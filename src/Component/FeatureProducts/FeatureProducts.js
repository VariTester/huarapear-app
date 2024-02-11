import React from 'react';
import "./FeatureProducts.css";
import SliderOne from '../SliderOne/SliderOne';

const FeatureProducts = () => {
  return (
    <div className='mx-[300px] mt-[45px]'>

        <div data-aos='fade-down' data-aos-duration='200' data-aos-easing='ease-in-out' className='section-title'>
            <div className='section-line'> </div>
                <h1>Feature Products</h1>
            <div className='section-line'></div>
        </div>

        <div>
          <SliderOne/>
        </div>

    </div>
  )
}

export default FeatureProducts;