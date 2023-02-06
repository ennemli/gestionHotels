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
    title:'Embassy Suites Dallas - Park Central Area '
  },
  {
    imgUrl:'https://picsum.photos/id/212/1024/1024',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area '
  },
  {
    imgUrl:'https://picsum.photos/id/252/1024/1024',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area '
  },
  {
    imgUrl:'https://picsum.photos/id/232/1024/1024',
    body:`
    Conveniently located near a variety of attractions in Dallas, Texas, this all-suite hotel offers convenient local area transport as well as delicious on-site dining choices available throughout the... The ease of checking in and out of the hotel.


    `,
    title:'Embassy Suites Dallas - Park Central Area '
  },

]

export default function Home() {
  
  return (
    <>
    <Header Navbar={Navbar}/>
    <Carousel/>
    <Section>
      <Cards>
      {hotels.map((hotel)=><Card {...hotel}/>)}
      </Cards>
    </Section>
    </>
  )
}
