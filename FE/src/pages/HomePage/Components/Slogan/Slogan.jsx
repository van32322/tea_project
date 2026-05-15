import React from 'react'
import styles from '../../HomePage.module.css'
const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <div className={styles.sloganContent}>
        <video autoPlay loop muted className={styles.sloganVideo}>
          <source src="https://tea-station-mtikcode.netlify.app/assets/video.mp4" type="video/mp4" />
        </video>
        <p className={styles.sloganText}>
          Chỉ những lá trà ngon nhất mới được đưa vào sản phẩm của chúng tôi,
            <br/>
          đảm bảo mỗi ngụm trà đều mang hương vị tinh khiết và tuyệt hảo.  
        </p>
      </div>
    </div>
  )
}

export default Slogan
