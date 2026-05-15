import React from 'react'
import styles from '../../HomePage.module.css'
import Logos from '../Logos/Logos'
const PartnerLogo = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.partnerLogo}>
          <h2 className={styles.sub_heading}>Có mặt tại</h2>
          <h1 className={styles.main_heading}>
            Những Nhà Phân Phối <span className={styles.text_gradient}>Uy Tín</span>
          </h1>
        </div>
        <Logos/>
      </div>
    </section>
  )
}

export default PartnerLogo
