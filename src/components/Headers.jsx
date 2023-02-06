import {
  FormControl,
  Navbar,
  Nav,
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import React, { Component } from 'react';
import logo from './logo192.png';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block aling-top"
                alt="Logo"
              />
              React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="./">Home</Nav.Link>
                <Nav.Link href="./#/about">About us</Nav.Link>
                <Nav.Link href="./#/contacts">Contacts</Nav.Link>
                <Nav.Link href="./#/blog">Blog</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
              <Button variant="outline-info">Search</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </>
    );
  }
}
