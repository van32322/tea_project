import React from 'react'
import styles from '../../HomePage.module.css'
import Button from '../../../../components/common/button/Button'
const TeaSection = ({img,name,shortDes,des,btnName,href}) => {
  return (
    <div className={styles.teaSection}>
      <div className={styles.teaTab}>
        <img src={img} alt={name} className={styles.teaImg} />
        <div className={styles.teaBlock}>
            <h3 className={styles.teaName}>
                {name}
            </h3>
            <h4 className={styles.teaShortDes}>
                {shortDes}
            </h4>
            <p className={styles.teaDes}>
                {des}
            </p>
            <Button href={href} text={btnName} />
        </div>
      </div>
    </div>
  )
}

export default TeaSection;
