import './App.css';
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Signup from "./components/Signup";
import { Navbar, Container, Nav } from "react-bootstrap";
import Login from './components/Login';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [page, setPage] = useState("Home");

  const render = () => {
    if (page === "Signup") {
      return <Signup />
    }
    if (page === "Doctors") {
      return <Doctors />
    }
    if (page === "Login") {
      return <Login />}
     else {
      return <Home />;
    }
    
  };

  return (
    <ApolloProvider client={client}>
    <div>
      <Header />
      <Navbar>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" onClick={() => setPage("Home")}> Home </Nav.Link>
            <Nav.Link href="#doctors" onClick={() => setPage("Doctors")}> Doctors </Nav.Link>
            <Nav.Link href="#signup" onClick={() => setPage("Signup")}> Sign Up</Nav.Link>
            <Nav.Link href="#login" onClick={() => setPage("Login")}> Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {render()}

      <Footer />

    </div>
    </ApolloProvider>
  )
}

export default App;
