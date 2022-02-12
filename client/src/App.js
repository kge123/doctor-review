import './App.css';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Signup from "./components/Signup";
import { Navbar, Container, Nav } from "react-bootstrap";
import Login from './components/Login';
import Reviews from './components/Reviews/Index';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


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

  return (
    <ApolloProvider client={client}>
    <div>
      <Header />
      <Navbar>
        <Container>
          <Navbar.Brand></Navbar.Brand>

          <Nav>
            
            <Nav.Link href="/" > Home </Nav.Link>
            <Nav.Link href="/Doctors" > Doctors </Nav.Link>
            <Nav.Link href="/Signup"> Sign Up</Nav.Link>
            <Nav.Link href="/Login" > Login</Nav.Link>
            
          </Nav>

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
