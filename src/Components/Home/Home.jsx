import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Hero from '../Hero/Hero'
import Product from '../Product/Product'
import Footer from '../Footer/Footer'
import Offer from "../Offers/Offers"

function Home() {
  return (
    <>
       <Navbar />
       <Banner />
       <About />
       <Hero />
       <Product />
       <Offer />
       <Footer />
     </>
  )
}

export default Home