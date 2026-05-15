import React from 'react'
import styles from '../../HomePage.module.css'
const Story = () => {
  return (
    <section style={{overflow:'hidden'}}>
      <div className={styles.storySection}>
        <div className={styles.storyOverlay}>
            <div className={`container ${styles.storyContainer} `}>
                <div className={styles.watermark}>
                    <h1 className={styles.watermarkText}>Tea <br/>Station</h1>
                </div>
                <div className={styles.storyContent}>
                    <div className={styles.storyText}>
                        <h2 className={` ${styles.storyTitle} ${styles.sub_heading}`}>khám phá</h2>
                        <h1 className={styles.main_heading} style={{color:'white'}}>
                            Câu chuyện và sứ mệnh
                        </h1>
                    </div>
                    <p className={styles.storyDes}>
                        Tại Tea Station, chúng tôi tận tâm tạo ra những loại trà đặc biệt tôn vinh hương vị và sức khỏe. Có nguồn gốc từ những thành phần tốt nhất, các hỗn hợp của chúng tôi được chế tác bằng sự chăm chút và đam mê, đảm bảo mỗi tách trà đều mang đến trải nghiệm thú vị.
                        <br/>
Cam kết về tính bền vững và hỗ trợ cộng đồng địa phương, chúng tôi mong muốn mang đến cho bạn không chỉ là trà, mà còn là sự kết nối với thiên nhiên và truyền thống trong từng ngụm trà. Hãy cùng chúng tôi thưởng thức hành trình của trà.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Story
