import React from 'react'
import Footer from '../components/Footer/Footer'
 import AudioGearCenter from '../components/HomeComponent/AudioGear/AudioGearCenter'
import ProductCard from '../components/Products/ProductCard'
import ProductTitle from '../components/ProductTitle/ProductTitle'
import ProductsDescribeSpeakers from '../components/ProductsDescribe/ProductsDescribeSpeakers'
import Header from '../components/Header/Header'

const SpeakersPage = () => {
  return (
    <div >
    <Header />
    <ProductTitle title="speakers" />
    <ProductsDescribeSpeakers  />
    <ProductCard/>
    <AudioGearCenter/>
    <Footer />
  </div>
  )
}

export default SpeakersPage