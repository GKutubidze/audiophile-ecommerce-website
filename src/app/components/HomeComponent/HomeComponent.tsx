import React from 'react'
import styles from "./HomeComponent.module.css"
import ZX9Speakers from './Speakers/ZX9Speakers'
import ZX7Speakers from './Speakers/ZX7Speakers'
import Earphones from './Earphones/Earphones'
import AudioGear from './AudioGear/AudioGear'
const HomeComponent = () => {
  return (
    <div className={styles.main}>
        <ZX9Speakers/>
        <ZX7Speakers/>
        <Earphones/>
        <AudioGear/>
    </div>
  )
}

export default HomeComponent