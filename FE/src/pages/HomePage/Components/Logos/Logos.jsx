import React from 'react'
import styles from '../../HomePage.module.css'
import logosConstants from '../../../../constants/logosConstants/logosConstants'
const Logos = () => {
  return (
    <div className={styles.logos}>
      <div className={styles.logos_wrapper}>
        {[...logosConstants, ...logosConstants].map((logosConstants, index) => (
        <img
            key={index}
            src={logosConstants.src}
            alt={logosConstants.alt}
            className={styles.logoTickerImage}
        />
    ))}
      </div>
    </div>
  )
}

export default Logos
