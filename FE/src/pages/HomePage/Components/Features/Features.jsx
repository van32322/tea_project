import React from 'react'
import styles from '../../HomePage.module.css'
const Features = () => {
  return (
    <section>
      <div className={`container ${styles.FeaturesContainer}`}>
        <div className={styles.firstRow}>
            <div className={styles.featureCard} style={{background:"url(https://tea-station-mtikcode.netlify.app/assets/benefit_1.jpg) no-repeat center", backgroundSize:"cover"}}>
                <div className={styles.featureFilter}></div>
                <h3 className={styles.featureText}>Nguồn cung cao cấp</h3>
            </div>
            <div className={`${styles.order} ${styles.featureCard}`}>
                <div>
                    <h2 className={styles.sub_heading}>Why us?</h2>
                    <h1 className={styles.main_heading} style={{textAlign:"center"}}>
                         Sự 
                        <span className={styles.text_gradient}> độc đáo </span> 
                         từ 
                         <br/>
                         Tea Station
                    </h1>
                </div>
            </div>
            <div className={styles.featureCard} style={{background:"url(https://tea-station-mtikcode.netlify.app/assets/benefit_1.jpg) no-repeat center", backgroundSize:"cover"}}>
                <div className={styles.featureFilter}></div>
                <h3 className={styles.featureText}>Hương vị và pha chế độc đáo</h3>
            </div>
        </div>
        <div className={styles.secRow}>
            <div className={styles.featureCard} style={{background:"url(https://tea-station-mtikcode.netlify.app/assets/benefit_1.jpg) no-repeat center", backgroundSize:"cover"}}>
                <div className={styles.featureFilter}></div>
                <h3 className={styles.featureText}>Tập trung vào sức khỏe</h3>
            </div>
            <div className={styles.featureCard} style={{background:"url(https://tea-station-mtikcode.netlify.app/assets/benefit_1.jpg) no-repeat center", backgroundSize:"cover"}}>
                <div className={styles.featureFilter}></div>
                <h3 className={styles.featureText}>Trải nghiệm cá nhân hóa</h3>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Features
