import React, { useState } from 'react'
import styles from '../../HomePage.module.css'
import teas from '../../../../constants/teasConstants/teasConstants'
import TeaSection from '../TeaSection/TeaSection'
const Products = () => {
    const [activeTab, setActiveTab] = useState('matcha');
    return (
        <section>
            <div className="container">
                <div className={styles.productsContainer}>
                    <div className={styles.productHeading}>
                        <h2 className={styles.sub_heading}>Tìm hiểu</h2>
                        <h1 className={styles.main_heading}>Sản phẩm
                            <span className={styles.text_gradient}> trà ngon</span>
                        </h1>
                    </div>
                    <div className={styles.productTabs}>
                        <ul className={styles.tabList}>
                            {teas.map((tea, index) => (
                                <React.Fragment key={tea.id}>
                                    <li
                                        className={
                                            activeTab === tea.id
                                                ? 'activeTab r-tabs-tab r-tabs-state-active'
                                                : 'r-tabs-state-default r-tabs-tab'
                                        }
                                    >
                                        <a
                                            className="tab-link r-tabs-anchor"
                                            href={`#${tea.id}`}
                                            onClick={() => setActiveTab(tea.id)}
                                        >
                                            <span className="hidden sm:inline">Trà</span> {tea.name}
                                        </a>
                                    </li>

                                    {index !== teas.length - 1 && (
                                        <li className="r-tabs-state-default r-tabs-tab">|</li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                        {activeTab === 'matcha' && <TeaSection {...teas.find(t => t.id === 'matcha')} />}
                        {activeTab === 'whiteTea' && <TeaSection {...teas.find(t => t.id === 'whiteTea')} />}
                        {activeTab === 'oolongTea' && <TeaSection {...teas.find(t => t.id === 'oolongTea')} />}
                        {activeTab === 'blackTea' && <TeaSection {...teas.find(t => t.id === 'blackTea')} />}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Products;
