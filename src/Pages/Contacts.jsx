import React, {Component} from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container style={{width: '500px'}}>
                    <h1 className='text-center'>Contact us</h1>
                    <Form>
                        <Form.Group controlId='formbasicEmail'>
                             <Form.Label>Email address</Form.Label>
                             <Form.Control type='email' placeholder='Enter email'></Form.Control>
                             <Form.Text>
                                Well never share your email anyone else
                             </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='formbasicPassword'>
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as='textarea' rows='3'/>
                        </Form.Group>
                        <Form.Group controlId='formbasicCheckbox'>
                            <Form.Check type='checkbox' label='Check me out'/>
                        </Form.Group>
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}