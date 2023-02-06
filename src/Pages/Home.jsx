import React, {Component} from 'react'
import { Container, Card, Row ,Button} from 'react-bootstrap'
import  CarouselBox  from '../components/CarouselBox'

export default class Home extends Component {
    render() {
        return (
        <>
           <CarouselBox/>
           <Container>
            <h2 className='text-center m-4'>Our team</h2>
             <Row md={3} className='m-4'>
               <Card border='info'>
                <Card.Img variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium a optio.
                    </Card.Text>
                    <Button variant='primary'>About team</Button>
                </Card.Body>
               </Card>
               <Card border='info'>
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium a optio.
                    </Card.Text>
                    <Button variant='primary'>About team</Button>
                </Card.Body><Card.Img variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
               </Card>
               <Card border='info'>
                <Card.Img variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium a optio.
                    </Card.Text>
                    <Button variant='primary'>About team</Button>
                </Card.Body>
               </Card>
             </Row>
           </Container>
        </>
        )
    }
}