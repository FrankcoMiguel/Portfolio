import React from 'react';
import '../assets/styles/CardView.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';



const CardView = (props) => {
    const {title, description, image, imageAlt, tags} = props;
    return (      
        <Container className='CardView'>
            <Image className='CardImage' src={image} alt={imageAlt} />
            <div className='CardBody'>
                <p>{title}</p>
                <p>{description}</p>
                <p>{tags}</p>
            </div>
        </Container>
    );
}

export default CardView;