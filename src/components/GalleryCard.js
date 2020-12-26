import React from "react"
import { Container } from "react-bootstrap"
import "./GalleryCard.scss"

const GalleryCard = props => {
  return (
    <Container
      style={{ backgroundImage: `url(${props.background})` }}
      className="GalleryCardContainer"
    >
      <div className="GalleryCardContent">
        <h2 className="GalleryCardTitle">{props.title}</h2>
      </div>
    </Container>
  )
}

export default GalleryCard
