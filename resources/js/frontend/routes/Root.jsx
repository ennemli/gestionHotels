import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'
export default function Root() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}
