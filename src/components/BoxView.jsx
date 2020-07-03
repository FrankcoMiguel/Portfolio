import React from 'react';
import '../assets/styles/BoxView.scss';
import { Container, Image } from 'react-bootstrap';


const BoxView = (props) => {
    const {image, imageAlt, width} = props;

    return (
        <Container className='BoxView'>
            <Image className='BoxImage' src={image} alt={imageAlt} width={width} height='auto;' />     
        </Container>
    );
}

export default BoxView;