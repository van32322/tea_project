import React from 'react'
import styles from '../../HomePage.module.css'
import Button from '../../../../components/common/button/Button'
const Hero = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={`container ${styles.layout}`}>

        <div data-aos="fade-left" className={styles.heroImgContainer}>
          <img src="https://tea-station-mtikcode.netlify.app/assets/hero_img.png" alt="hero-img" className={styles.heroImg}/>
        </div>

        <div className={styles.heroContentContainer}>
          <div className={styles.heroTitleContainer}>
            <h2 className={styles.heroTitle}>
              hơn 
              <span className={styles.heroTitle2}> một trăm </span>
              hương vị trà
            </h2>
            <h1 className={styles.heroSubtitle}>
              Trà Đặc Biệt Chế Tác
            </h1>
          </div>

          <p className={styles.heroDescription}>
            Sứ mệnh của chúng tôi là mang đến cho bạn sự yên bình và kết nối thông
            qua các hương vị trà được chọn lọc cẩn thận và được tạo ra để nâng cao
            trải nghiệm hàng ngày và sức khoẻ toàn diện cho bạn.
          </p>

          <Button href="/menu" text="Tìm hiểu sản phẩm" />
        </div>
      </div>
    </section>
  )
}

export default Hero
