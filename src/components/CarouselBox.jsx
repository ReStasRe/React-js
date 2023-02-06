import React, {Component} from 'react'
import { Carousel } from 'react-bootstrap'

export default class CauoselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                       className='d-block w-100'
                       src='https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=400'
                       alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, adipisci.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                       className='d-block w-100'
                       src='https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&w=400'
                       alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, adipisci.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}