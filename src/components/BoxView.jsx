import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const BoxView = (props) => {
    const {image, imageAlt} = props;
    return (
        <Container className='BoxView'>
            <Image className='BoxImage' src={image} alt={imageAlt} />
            
        </Container>
    );
}

export default BoxView;