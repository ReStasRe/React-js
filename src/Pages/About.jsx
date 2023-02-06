import React, {Component} from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
        <Container>
            <Tab.Container id='Left-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm='3'>
                        <Nav variant='palls' className='flex-column mt-2'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>
                                    Design
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>
                                    Team
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>
                                    Programing
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth'>
                                    Franeworks
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth'>
                                    Libraries
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey='first' className='mt-3'>
                                <img src='https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda officiis, eos cupiditate beatae nemo delectus natus. Natus nulla perferendis, veniam eius voluptate tenetur qui.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <img src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda officiis, eos cupiditate beatae nemo delectus natus. Natus nulla perferendis, veniam eius voluptate tenetur qui.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda officiis, eos cupiditate beatae nemo delectus natus. Natus nulla perferendis, veniam eius voluptate tenetur qui.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fourth'>
                                <img src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda officiis, eos cupiditate beatae nemo delectus natus. Natus nulla perferendis, veniam eius voluptate tenetur qui.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fifth'>
                                <img src="https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2022/12/10-Useful-NodeJS-Libraries-You-Should-Know-in-2022-1.webp" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda officiis, eos cupiditate beatae nemo delectus natus. Natus nulla perferendis, veniam eius voluptate tenetur qui.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
        )
    }
}