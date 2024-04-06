import React from 'react'
 import styles from "./page.module.css"
import InputComponent from '@/app/components/Input/InputComponent'
import CartComponentCheckout from '@/app/components/Cart/CartComponentCheckout'
import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
 const CheckoutPage = () => {
  return (
    <div className={styles.main}>
        <Header/>
        <div className={styles.section}>
        <InputComponent/>
        <CartComponentCheckout/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default CheckoutPage