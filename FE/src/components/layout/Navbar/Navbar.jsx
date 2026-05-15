import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../../assets/image/logo.png'
const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <a className={styles.logo} href="/">
                        <img className={styles.logoImg} src={logo} alt="Tea Logo" />
                        <p className={styles.logoName}>Tea Station</p>
                    </a>

                    <nav className={styles.nav}>
                        <a className={styles.navLink} href="/products">Sản phẩm</a>
                        <a className={styles.navLink} href="/menu">Giới thiệu</a>
                        <a className={styles.navLink} href="/about">Liên hệ</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
