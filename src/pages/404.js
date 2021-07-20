import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Image from '../images/404.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'gatsby'
import './404.scss'

export default function NotFound() {

  useEffect(() => {
    Aos.init({ duration: 900 })
  },[])

  return (
    <Layout>
      <div className="NotFound">
        <img data-aos="zoom-in" src={Image}></img>
        <h1>Page Not Found</h1>
        <p>Oops, we couldn't find this page!</p>
        <Link to="/">Return to home</Link>
      </div>
    </Layout>
  )
}
  