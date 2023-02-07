import React from 'react'
import Header from '../layouts/Header'
import Navbar  from '../components/home/Navbar'
import Carousel from '../components/carousel'
import SearchPanel from '../components/searchPanel'
import Section from '../layouts/Section'
import Card from '../layouts/Card'
import Cards from '../components/home/cards'
import HotelCanvas from '../layouts/HotelCanvas'
const hotels=[
  {
    imgUrl:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.
    `,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:0.5,
    price:100
  },
  {
    imgUrl:'https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.`,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:4.5,
    price:250
  },
  {
    imgUrl:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:2.5,
    price:300

  },
  {
    imgUrl:'https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:1,
    price:300

  },
  {
    imgUrl:'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:3,
    price:400

  },

]

export default function Home() {
  
  return (
    <>
    <Header Navbar={Navbar}/>
    <HotelCanvas/>
    <Section>
      <Cards>
      {hotels.map((hotel,i)=><Card key={i} {...hotel}/>)}
      </Cards>
    </Section>
    </>
  )
}
