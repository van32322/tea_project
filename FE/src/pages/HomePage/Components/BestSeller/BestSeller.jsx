import React from 'react'
import styles from '../../HomePage.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from '../../../../constants/teasConstants/productConstant';
const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <section>
      <div className='container' style={{ marginBlock: 'calc(var(--spacing) * 20)' }}>
        <div className={styles.bestSeller}>
          <div>
            <h2 className={styles.sub_heading}>Khách hàng yêu thích</h2>
            <h1 className={styles.main_heading}>
              Những sản phẩm
              <span className={styles.text_gradient}> bán chạy nhất</span>
            </h1>
          </div>
          <p className={styles.bestSellerDescription}>
            Khám phá những sản phẩm bán chạy nhất của chúng tôi, nơi chất lượng kết hợp hương vị trong mỗi tách trà. Hãy tham gia cùng hàng ngàn khách hàng hài lòng đã biến những hỗn hợp này thành sở thích của họ và nâng tầm thời gian uống trà của bạn ngay hôm nay!
          </p>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <div className={styles.bestSellerItem}>

                {/* LEFT */}
                <div className={styles.bestSellerLeft}>

                  <div className={styles.productInfo}>
                    <h3>{product.title}</h3>

                    <p>{product.description}</p>
                  </div>

                  {/* BENEFITS */}
                  <div className={styles.benefitBars}>

                    {product.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className={styles.progressbarItem}
                      >
                        <h4 className={styles.progressTitle}>
                          {benefit.title}
                        </h4>

                        <div
                          className={styles.progressBar}
                          data-percentage={`${benefit.percent}%`}
                        >

                          {/* NUMBER */}
                          <div className={styles.progressNumber}>
                            <div
                              className={styles.progressNumberMark}
                              style={{
                                left: `${benefit.percent}%`
                              }}
                            >
                              <span className={styles.percent}>
                                {benefit.percent}%
                              </span>

                              <span className={styles.downArrow}></span>
                            </div>
                          </div>

                          {/* BAR */}
                          <div className={styles.progressBg}>
                            <div
                              className={styles.progressFill}
                              style={{
                                width: `${benefit.percent}%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

                {/* RIGHT */}
                <div className={styles.bestSellerRight}>
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  )
}

export default BestSeller
