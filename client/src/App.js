import './App.css';
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Signup from "./components/Signup";
import { Navbar, Container, Nav } from "react-bootstrap";


function App() {
  const [page, setPage] = useState("Home");

  const render = () => {
    if (page === "Signup") {
      return <Signup />
    }
    if (page === "Doctors") {
      return <Doctors />
    } else {
      return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <Navbar>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" onClick={() => setPage("Home")}> Home </Nav.Link>
            <Nav.Link href="#doctors" onClick={() => setPage("Doctors")}> Doctors </Nav.Link>
            <Nav.Link href="#signup" onClick={() => setPage("Signup")}> Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {render()}

      <Footer />

    </div>
  )
}

export default App;
