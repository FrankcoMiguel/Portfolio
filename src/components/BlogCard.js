import React from "react"
import { Container, Image } from "react-bootstrap"
import "./BlogCard.scss"

const BlogCard = props => {
  return (
    <Container
      style={{ backgroundImage: `url(${props.background})` }}
      className="BlogCardContainer"
    >
      <div className="BlogCardContent">
        <h2 className="BlogCardTitle">{props.title}</h2>
        <p className="BlogCardDetail">{props.paragraph}</p>
      </div>
    </Container>
  )
}

export default BlogCard
