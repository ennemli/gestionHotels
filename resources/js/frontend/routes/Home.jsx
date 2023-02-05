import React from 'react'
import Header from '../layouts/Header'
import Navbar  from '../components/home/Navbar'
import Carousel from '../components/carousel'

export default function Home() {
  return (
    <>
    <Header Navbar={Navbar}/>
    <Carousel/>
    </>
  )
}
