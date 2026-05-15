import styles from './Products.module.css'
import filters from '../../constants/productsConstants/filterConstant'
// import products from '../../constants/productsConstants/productsConstant'
import styles2 from '../HomePage/HomePage.module.css'
import React, { useEffect, useState } from 'react'
import { productService } from '../../services/productService'
import { useSearchParams } from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category');
    const [activeFilter, setActiveFilter] = useState(
        categoryFromUrl || 'all'
    );
    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
        if (categoryFromUrl) {
            setActiveFilter(categoryFromUrl);
        }
    }, [categoryFromUrl]);
    const fetchProducts = async () => {
        try {
            const data = await productService.getAllProducts();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };
    const filteredProducts =
        activeFilter === 'all'
            ? products
            : products.filter(
                (product) => product.category === activeFilter
            );
    return (
        <section className='container' style={{ marginTop: 'calc(var(--spacing) * 20)' }}>
            <img className={styles.banner} src='https://tea-station-mtikcode.netlify.app/assets/banners/banner1.jpg' alt="Products" />
            <div className={styles.header}>
                <div>
                    <h2 className={styles2.sub_heading}>Sản phẩm của chúng tôi</h2>
                    <h1 className={styles2.main_heading}>Tất cả sản phẩm</h1>
                </div>
                <p className={styles.description}>
                    Cho dù bạn là người đam mê trà lâu năm hay mới bước chân vào thế giới
                    trà, chúng tôi ở đây để giúp bạn khám phá loại trà pha trộn yêu thích
                    tiếp theo của mình. Khám phá bộ sưu tập của chúng tôi và trải nghiệm nghệ
                    thuật pha trà trong từng ngụm.
                </p>
            </div>
            <div className={styles.filerTabs}>
                {filters.map((filter) => (
                    <a
                        key={filter.id}
                        className={`${styles.filterBtn} ${activeFilter === filter.id
                            ? styles.activeFilter
                            : ''
                            }`}
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </a>
                ))}
            </div>
            <div style={{ marginTop: 'calc(var(--spacing) * 9)' }}></div>
            <div className={styles.productsGrid}>
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className={styles.productCard}
                    >
                        <div className={styles.productImageWrapper}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className={styles.productImage}
                            />

                            <div className={styles.overlay}>
                                <div className={styles.productDetails}>
                                    <h3>{product.title}</h3>

                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
