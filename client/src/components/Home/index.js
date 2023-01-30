import { Container } from "react-bootstrap";
import React from "react";
// import { QUERY_DOCTOR } from "../../utils/queries";
// import { useQuery } from "@apollo/client";

const Home = () => {


  return (
    <Container>
      <h1>Search for Doctors in the Metro Atlanta area</h1>
      <h2>Find the perfect Doctor for you and your loved ones. 
      </h2>
      <p> For forever now people have relied on their friends to give them a good recommendation for a doctor. Sometimes your friends haven't seen a specific doctor that you need to see. Sometimes it may be embarrising to tell someone other than a doctor what is wrong. Whenever that is the case it is pretty much a shot in the dark when choosing a doctor. Instead of taking taking shots in the dark,  use this application to find a good doctor.</p>
      {/* <Form onSubmit={handleFormSubmit}>
        <Form.Row>
          <Col xs={12} md={8}>
            <Form.Control
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              size="lg"
              placeholder="Search for a Doctor"
            />
          </Col>
          <Col xs={12} md={4}>
            <Button type="submit" variant="success" size="lg">
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form> */}
    </Container>
  );
};

export default Home;
