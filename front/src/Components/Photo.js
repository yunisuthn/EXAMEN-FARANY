import React, { Component } from 'react';
import Image1 from './equipe.jpg';

class Photo extends Component {

    render() {
        return (
            <div className=' mx-auto mt-5'>
                <img className='img imgT' src={Image1} alt="Logo" />
            </div>
        );
    }
}

export default Photo;