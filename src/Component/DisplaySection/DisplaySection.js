import React from 'react'
import './DisplaySection.css'

import { MdDoubleArrow } from "react-icons/md";

import img1 from "../Assets/grocery/dp-img1.png"
import img2 from "../Assets/huarapearimagenes/drinkpoly.png"
import img3 from "../Assets/huarapearimagenes/bebidas.png"
import img8 from "../Assets/huarapearimagenes/superoferta.png"
import chilly from "../Assets/huarapearimagenes/ajirojo.png"
import tamarindo from "../Assets/huarapearimagenes/tamarindo.png"
import orange from "../Assets/grocery/orange-slice.png"
import vodka from "../Assets/huarapearimagenes/smirnoftanaribdo.png"
import { TypeAnimation } from 'react-type-animation';

const DisplaySection = () => {
  return (
    <div className='mx-[320px] mt-[25px]'>
        <div className='flex gap-[51px]'>
            <div className='display-first-section'>

                <div data-aos='zoom-out' data-aos-duration='2000' className='absolute left-[175px] bottom-[50px] z-20'>
                    <img src={img8}  alt='' style={{width: '250px'}}/>
                </div>

                <div data-aos='fade-down' data-aos-duration='2000' className='absolute right-[40px] top-[20px]'>
                    <img src={chilly} alt='' style={{width: '150px'}}/>
                </div>

                <div data-aos='fade-right' data-aos-duration='2000' className='absolute right-[242px] bottom-[60px]'>
                    <img src={tamarindo} alt='' style={{width: '100px'}}/>
                </div>

                <div data-aos='fade-left' data-aos-duration='2000' className=' absolute right-[50px] bottom-[30px]'>
                    <img src={orange} alt=''/>
                </div>

                <div data-aos='fade-right' data-aos-duration='2000' className='absolute left-[-10px] bottom-[-20px]'>
                    <img src={vodka} alt='' style={{width: '200px'}}/>
                </div>

                <div className='content-sec-one'>

                    <h2>SMIRNOFF</h2>
                    <h1>EXIGE LO MEJOR</h1>
                    <h3>
                        <TypeAnimation
                        sequence={['NO TE CONFORMES CON MENOS', 2000, '']}
                        speed={50}
                        repeat={Infinity}
                        />    
                        
                        
                    </h3>

                    <div className='shop-now-btn ml-[250px]'>
                        <button> Comprar Ahora</button>
                        <MdDoubleArrow className='m1-1'/>
                    </div>

                </div>

                <img src={img1} alt=''/>
            </div>

            <div className='grid gap-[30px]'>

                <div className='relative'>
                    <div className='content-section-two'>
                        <h1>Juegos</h1>
                        <h2>de mesa</h2>

                        <div className='shop-now-btn'>
                            <button>Compra Ahora</button>
                            <MdDoubleArrow className='ml-1'/>
                        </div>

                    </div>

                    <div>
                        <div className='hover05 column'>
                            <figure>
                                <img src={img2} alt='' style={{width: '400px' , height: '200px'}}/>
                            </figure>
                        </div>
                    </div>

                </div>

                <div className='relative'>
                    <div className='content-section-three'>
                        <h1>Más bebidas</h1>
                        {/* <h2>varias</h2> */}

                        <div className='shop-now-btn'>
                            <button>Ver ahora</button>
                            <MdDoubleArrow className='ml-1'/>
                        </div>
                    </div>

                    <div>
                        <div className='hover05 column'>
                            <figure>
                                <img src={img3} alt=''/>
                            </figure>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default DisplaySection