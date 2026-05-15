import React from 'react'
import styles from '../../HomePage.module.css'
const Stats = () => {
    return (
        <section className={styles.statsSection} style={{ background: "url(https://tea-station-mtikcode.netlify.app/assets/statsBg.jpg) no-repeat fixed center / cover" }}>
            <div className={styles.statsOverlay}></div>
            <div className={`container ${styles.statsContent}`}>
                <div className={styles.statItem}>
                    <h1 className={styles.counter}>100+</h1>
                    <h2 className={styles.statsText}>Hương vị pha chế</h2>
                </div>
                <svg viewBox='-1 -1 3 137' width='3' height='137' style={{ display: 'block' }} xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="-5.90104e-06" y2="135" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0"></stop>
                            <stop offset="0.494792" stop-color="white"></stop>
                            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                    <line x1="0.5" y1="0" x2="0.5" y2="135" stroke="url(#lineGradient)" stroke-opacity="0.3" fill="none"></line>
                </svg>
                <div className={styles.statItem}>
                    <h1 className={styles.counter}>500+</h1>
                    <h2 className={styles.statsText}>Sản phẩm bán ra toàn thế giới</h2>
                </div>
                <svg viewBox='-1 -1 3 137' width='3' height='137' style={{ display: 'block' }} xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="-5.90104e-06" y2="135" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0"></stop>
                            <stop offset="0.494792" stop-color="white"></stop>
                            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                    <line x1="0.5" y1="0" x2="0.5" y2="135" stroke="url(#lineGradient)" stroke-opacity="0.3" fill="none"></line>
                </svg>
                <div className={styles.statItem}>
                    <h1 className={styles.counter}>4.9+</h1>
                    <h2 className={styles.statsText}>Đánh giá từ khách hàng</h2>
                </div>
            </div>

        </section>
    )
}

export default Stats
