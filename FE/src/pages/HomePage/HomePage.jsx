import React from 'react'
import Hero from './Components/Hero/Hero'
import PartnerLogo from './Components/PartnerLogo/PartnerLogo'
import Products from './Components/Products/Products'
import Slogan from './Components/Slogan/Slogan'
import Features from './Components/Features/Features'
import BestSeller from './Components/BestSeller/BestSeller'
import Stats from './Components/Stats/Stats'
import Story from './Components/Story/Story'
import Contact from './Components/Contact/Contact'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <PartnerLogo/>
      <Products/>
      <Slogan/>
      <Features/>
      <BestSeller/>
      <Stats/>
      <Story/>
      <Contact/>
    </div>
  )
}

export default HomePage
