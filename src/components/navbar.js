import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="http://localhost:3000/main">메인페이지</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="http://localhost:3000/register">등록하기</Nav.Link>
              <Nav.Link href="http://localhost:3000/posting">글쓰기</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </>
    );
};  

export default Navigation;