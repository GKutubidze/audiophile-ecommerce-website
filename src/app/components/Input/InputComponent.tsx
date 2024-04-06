'use client'
import React from "react";
import styles from "./InputComponent.module.css";
const InputComponent = () => {
  return (
    <>
    <div className={styles.main}>
      <p className={styles.header}>checkout</p>
      <div className={styles.content}>
        <p className={styles.title}>billing details</p>

        <div className={styles.labelContainer}>
          <label htmlFor="name" className={styles.label}>
            Name
            <input type="text" name="name" placeholder="Alexei Ward" />
          </label>

          <label htmlFor="mail" className={styles.label}>
            Email Address
            <input type="email" name="mail" placeholder="alexei@mail.com" />
          </label>

          <label htmlFor="phone" className={styles.label}>
            Phone Number
            <input type="number" name="phone" placeholder="+1 202-555-0136" />
          </label>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.title}>shipping info</p>

        <div className={styles.labelContainer}>
          <label htmlFor="address" className={styles.label}>
            Your Address
            <input
              type="text"
              name="address"
              placeholder="1137 Williams Avenue"
            />
          </label>

          <label htmlFor="zipcode" className={styles.label}>
            Zip Code
            <input type="number" name="zipcode" placeholder="1001" />
          </label>

          <label htmlFor="city" className={styles.label}>
            City
            <input type="text" name="city" placeholder="New York" />
          </label>

          <label htmlFor="country" className={styles.label}>
            Country
            <input type="text" name="country" placeholder="United States" />
          </label>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.title}>payment details</p>
         <div className={styles.labelContainer}>
         <p className={styles.method}>Payment Method</p>

          <div className={styles.radioContainer}>
            <input
              type="radio"
              name="e-money-number"
              placeholder="238521993"
              className={styles.radioInput}
            />

            <label htmlFor="e-money-number">e-Money Number</label>
          </div>

          <div className={styles.radioContainer}>
            <input
              type="radio"
              name="e-money-number"
              placeholder="6891"
              className={styles.radioInput}
            />

            <label htmlFor="e-money-pin">e-Money PIN</label>
          </div>
        </div>

        <label htmlFor="number" className={styles.label}>
        e-Money Number
            <input type="number" name="number" placeholder="238521993" />
          </label>


          <label htmlFor="pin" className={styles.label}>
          e-Money PIN
            <input type="number" name="pin" placeholder="6891" />
          </label>

      </div>
     </div>

 </>
  );
};

export default InputComponent;
 