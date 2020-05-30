import React from 'react';
import '../assets/styles/CardView.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';


const CardView = (props) => {
    return (      
        <Container className='CardView'>
            <Image className='CardImage' src={props.image} alt={props.imageAlt} />
            <div className='CardBody'>
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>
        </Container>
    );
}

export default CardView;