import React from "react"
import Layout from "../components/Layout"
import { Row } from "react-bootstrap"
import GalleryCard from "../components/GalleryCard"
import "./gallery.scss"


import FirstBlogBackground from "../images/first-blog-background.png"
import SecondBlogBackground from "../images/second-blog-background.png"
import ThirdBlogBackground from "../images/third-blog-background.png"
import FourthBlogBackground from "../images/fourth-blog-background.png"
import FifthBlogBackground from "../images/fifth-blog-background.png"
import SixthBlogBackground from "../images/sixth-blog-background.png"

export default function Gallery() {
  return (
    <Layout title="Frank's Gallery">
      <div className="GalleryContainer">
        <div>
          <h1 className="GalleryTitle">Gallery</h1>
          <p className="GalleryParagraph">Here's a collection of every side project I've worked on</p>
        </div>

        <Row className="GalleryList">
          <GalleryCard
            background={FirstBlogBackground}
            title="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
          <GalleryCard
            background={SecondBlogBackground}
            title="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
          <GalleryCard
            background={ThirdBlogBackground}
            title="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
          <GalleryCard
            background={FourthBlogBackground}
            title="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
          <GalleryCard
            background={FifthBlogBackground}
            title="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
          <GalleryCard
            background={SixthBlogBackground}
            title="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
        </Row>
      </div>
    </Layout>
  )
}
