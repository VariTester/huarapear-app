import React from 'react';
import './SliderOne.css';

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay, Navigation} from 'swiper/modules'

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



import { MdDoubleArrow } from "react-icons/md";

import img1 from '../Assets/huarapearimagenes/smirnoffice.png'
import img2 from '../Assets/huarapearimagenes/smirnoffnaranja.png'
import img3 from '../Assets/huarapearimagenes/heineken.png'
import img4 from '../Assets/grocery/tomato 2.png'

const SliderOne = () => {
  return (
    <div>
      <Swiper
      slidesPerView={4}
      spaceBetween={0}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,

      }}

      navigation={true}
      modules={[Autoplay, Navigation]}
      className='mySwiper'
      >
        <SwiperSlide>
          <div className='hoverIncrease'>
            <img src={img1} alt='' />
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='hoverIncrease2'>
            <img src={img2} alt='' />
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='hoverIncrease3'>
            <img src={img3} alt=''/>
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='hoverIncrease'>
            <img src={img1} alt='' />
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='hoverIncrease2'>
            <img src={img2} alt='' />
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='hoverIncrease3'>
            <img src={img3} alt=''/>
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='hoverIncrease'>
            <img src={img1} alt='' />
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='hoverIncrease2'>
            <img src={img2} alt='' />
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='hoverIncrease3'>
            <img src={img3} alt=''/>
            <div className='content'>
              <h1>Product One</h1>
              <h2>$200.25</h2>
              <div className='price-underline'></div>
              <div className='select-btn'>
                <p>SELECT OPTION</p>
                <MdDoubleArrow className='ml-1'/>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default SliderOne;