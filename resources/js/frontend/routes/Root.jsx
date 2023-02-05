import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'

export default function Root() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
