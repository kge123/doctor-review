import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Signup from "./components/Signup";
import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";
import Login from './components/Login';
import Reviews from './components/Reviews/Index';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SignUpForm from './components/Signup';
import LoginForm from './components/Login';
import Auth from '../src/utils/auth';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
//   const [page, setPage] = useState("Home");

  // const render = () => {
  //   if (page === "Signup") {
  //     return <Signup />
  //   }
  //   if (page === "Doctors") {
  //     return <Doctors />
  //   }
  //   if (page === "Login") {
  //     return <Login />}
  //   if (page ==="Reviews"){
  //     return <Reviews/>
  //   }
  //    else {
  //     return <Home />;
  //   }
    
  // };
  const [showModal, setShowModal] = useState(false);

  return (
    <ApolloProvider client={client}>
    <div>
      <Header />
      <Navbar>
        <Container>
          <Navbar.Brand>Atlanta Doctor Reviews</Navbar.Brand>

          <Nav>
            
            <Nav.Link href="/" > Home </Nav.Link>
            <Nav.Link href="/Doctors" > Doctors </Nav.Link>
            {/* <Nav.Link href="/Signup"> Sign Up</Nav.Link>
            <Nav.Link href="/Login" > Login</Nav.Link> */}
            {/* if user is logged in show saved books and logout */}
            {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
          </Nav>
          {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

        </Container>
      </Navbar>
     <Router>
       
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/Doctors' component={Doctors}/>
         <Route exact path='/Signup' component={Signup}/>
         <Route exact path='/Login' component={Login}/>
         <Route exact path='/Reviews/:id' component={Reviews}/>

     </Switch>
     
     </Router>

      
      
      <Footer />
     

    </div>
    </ApolloProvider>
  )
}

export default App;
