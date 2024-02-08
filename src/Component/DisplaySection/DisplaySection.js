import React from 'react'
import './DisplaySection.css'

import { MdDoubleArrow } from "react-icons/md";

import img1 from "../Assets/grocery/dp-img1.png"
import img2 from "../Assets/grocery/dp-img2.jpg"
import img3 from "../Assets/grocery/dp-img3.jpg"
import img8 from "../Assets/grocery/flowerkolly.png"
import cherry from "../Assets/grocery/cherry.png"
import tomato from "../Assets/grocery/tomato-slice.png"
import orange from "../Assets/grocery/orange-slice.png"
import plate from "../Assets/grocery/plate.png"

const DisplaySection = () => {
  return (
    <div className='mx-[320px] mt-[25px]'>
        <div className='flex gap-[51px]'>
            <div className='display-first-section'>

                <img src={img8} className='absolute -z-10' alt=''/>

                <div className='absolute right-[40px] top-[20px]'>
                    <img src={cherry} alt=''/>
                </div>

                <div className='absolute right-[242px] bottom-[60px]'>
                    <img src={tomato} alt=''/>
                </div>

                <div className=' absolute right-[50px] bottom-[30px]'>
                    <img src={orange} alt=''/>
                </div>

                <div className='absolute left-[-150px] bottom-[-180px]'>
                    <img src={plate} alt=''/>
                </div>

                <div className='content-sec-one'>
                    <h2>DELICIOSA</h2>
                    <h1>ENSALADA</h1>
                    <h3>EVERYDAY</h3>

                    <div className='shop-now-btn ml-[250px]'>
                        <button> Comprar Ahora</button>
                        <MdDoubleArrow className='m1-1'/>
                    </div>

                </div>

                <img src={img1} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default DisplaySection