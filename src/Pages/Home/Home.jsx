import React from 'react'
import Header from '../../Components/Header/Header'
import FormContainer from '../../Components/FormContainer/FormContainer'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import PricingPlan from '../../Components/PricingPlan/PricingPlan'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Blogs from '../../Components/Blogs/Blogs'

const Home = () => {
  return (
    <div>
      <Header/>
      <FormContainer/>
      <FoodDisplay/>
      <PricingPlan/>
      <ContactUs/>
      <Blogs/>
    </div>
  )
}

export default Home
