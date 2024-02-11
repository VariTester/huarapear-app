import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import DisplaySection from '../DisplaySection/DisplaySection'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
// import SliderOne from '../SliderOne/SliderOne'

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <DisplaySection/>
        <FeatureProducts/>
        {/* <SliderOne/> */}
    </div>
  )
}

export default Home