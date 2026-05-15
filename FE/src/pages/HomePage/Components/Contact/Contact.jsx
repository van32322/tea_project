import React from 'react'
import styles from '../../HomePage.module.css'
import CONTACT_INFO from '../../../../constants/contactConstants/contactConstants'
const Contact = () => {
  return (
    <section>
      <div className='container' style={{marginBlock: 'calc(var(--spacing) * 20)'}}>
        <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
                <div>
                    <h2 className={styles.sub_heading}>Có câu hỏi?</h2>
                    <h1 className={styles.main_heading}>Liên hệ với chúng tôi ngay hôm nay!</h1>
                </div>
                <div style={{width:'100%'}}>
                    <div className={styles.contactHeader}>
                        <img className={styles.contactImg} src='https://tea-station-mtikcode.netlify.app/assets/building.svg' alt="Building" />
                        <h1>Địa chỉ</h1>
                    </div>
                    <p className={styles.contactInfo}>{CONTACT_INFO.ADDRESS.DISPLAY}</p>
                </div>
                <div style={{width:'100%'}}>
                    <div className={styles.contactHeader}>
                        <img className={styles.contactImg} src='https://tea-station-mtikcode.netlify.app/assets/mail.svg' alt="Email" />
                        <h1>Email</h1>
                    </div>
                    <p className={styles.contactInfo}>{CONTACT_INFO.EMAIL.RAW}</p>
                </div>
                <div style={{width:'100%'}}>
                    <div className={styles.contactHeader}>
                        <img className={styles.contactImg} src='https://tea-station-mtikcode.netlify.app/assets/phone.svg' alt="Phone" />
                        <h1>Điện thoại</h1>
                    </div>
                    <p className={styles.contactInfo}>{CONTACT_INFO.PHONE.DISPLAY}</p>
                </div>
            </div>
            <div className={styles.contactForm}>
                <div>
                    <h2 className={styles.sub_heading}>Cập nhập bản tin</h2>
                    <h1 className={styles.main_heading}>Đăng ký theo dõi</h1>
                </div>
                <p>Đăng ký nhận bản tin của chúng tôi và cập nhật thông tin.</p>
                <div className={styles.contactInput}>
                    <input type="email" placeholder='Nhập email của bạn' />
                    <img src='https://tea-station-mtikcode.netlify.app/assets/mail2.svg' alt='mail'/>
                </div>
                <button className={styles.contactButton}>
                    <div className={styles.contactButtonContent}>
                        <span>Đồng ý theo dõi</span>
                    </div>
                </button>
                <img src='https://tea-station-mtikcode.netlify.app/assets/contact.png' className={styles.formBackground}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
