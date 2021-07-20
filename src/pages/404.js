import React, { useEffect } from 'react'
import Image from '../images/404.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import './404.scss'

export default function NotFound() {

  useEffect(() => {
    Aos.init({ duration: 900 })
  },[])

  return (
    <div className="NotFound">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Page not found</title>
      </Helmet>
      <img data-aos="zoom-in" src={Image}></img>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
      <Link to="/">Return to home</Link>
    </div>
  )
}
  