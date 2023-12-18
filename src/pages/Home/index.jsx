import React from 'react'
import SliderSection from '../../components/SliderSection'
import Flashsales from '../../components/Flashsales'
import Browsecategory from '../../components/Browsecategory'
import Bestselling from '../../components/Bestselling'
import Photosection from '../../components/Photosection'
import Product from '../../components/Products'
import Newarrival from '../../components/Newarrival'
import Lastsection from '../../components/Lastsection'

function Home() {
  return (
    <div>
       <SliderSection/>
       <Flashsales/>
       <Browsecategory/>
       <Bestselling/>
       <Photosection/>
       <Product/>
       <Newarrival/>
       <Lastsection/>
    </div>
  )
}

export default Home