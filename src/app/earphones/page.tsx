import React from 'react'
import styles from "./page.module.css"
import Footer from '../components/Footer/Footer'
import AudioGearCenter from '../components/HomeComponent/AudioGear/AudioGearCenter'
import ProductCard from '../components/Products/ProductCard'
import ProductsDescribe from '../components/ProductsDescribe/ProductsDescribe'
import ProductTitle from '../components/ProductTitle/ProductTitle'
import data from "../../../public/data.json"
import ProductsDescribeEarphones from '../components/ProductsDescribe/ProductsDescribeEarphones'
import Header from '../components/Header/Header'
const EarphonesPage = () => {
  return (
    <div className={styles.main}>
    <Header />
    <ProductTitle title="earphones" />
    <ProductsDescribeEarphones  />
    <ProductCard/>
    <AudioGearCenter/>
    <Footer />
  </div>
  )
}

export default EarphonesPage