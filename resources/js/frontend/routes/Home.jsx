import React from 'react'
import Header from '../layouts/Header'
import Navbar  from '../components/home/Navbar'
import Carousel from '../components/carousel'
import SearchPanel from '../components/searchPanel'
import Section from '../layouts/Section'
import Card from '../layouts/Card'
import Cards from '../components/home/cards'
const hotels=[
  {
    imgUrl:'https://picsum.photos/id/292/1024/1024',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.
    `,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:0.5,
    price:100
  },
  {
    imgUrl:'https://picsum.photos/id/212/1024/1024',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.`,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:4.5,
    price:250
  },
  {
    imgUrl:'https://picsum.photos/id/252/1024/1024',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:2.5,
    price:300

  },
  {
    imgUrl:'https://picsum.photos/id/232/1024/1024',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area ',
    rate:1,
    price:300

  },
  {
    imgUrl:'https://picsum.photos/id/132/1024/1024',
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
    <Carousel/>
    <Section>
      <Cards>
      {hotels.map((hotel,i)=><Card key={i} {...hotel}/>)}
      </Cards>
    </Section>
    </>
  )
}
