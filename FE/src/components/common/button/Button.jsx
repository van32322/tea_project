import React from 'react'
import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({ href, text }) => {
    return (
        <button className={styles.button}>
            <Link to={href} className={styles.link} >
                {text}
                <img src="https://tea-station-mtikcode.netlify.app/assets/right-arrow.svg" />
            </Link>
        </button>
    )
}

export default Button
