// import JSONDATA from './Doctordata.json'
import { Container, Card, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Form from 'react-bootstrap/Form'
import React, { useState } from "react";
import { QUERY_SINGLEDOCTOR } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
// import { useState } from "react";
import Auth from "../../utils/auth";
import { ADD_THOUGHT } from "../../utils/mutations";

export default function Reviews() {
  const [addThought, { error }] = useMutation(ADD_THOUGHT);
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLEDOCTOR, {
    variables: { id },
  });
  let doctor
  let doctorId


  if (!loading){
  doctor = data?.singledoctor;
  console.log(doctor);
  doctorId = doctor._id;
  }
  const [thoughtText, setThoughtText] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          doctorId,
          user: Auth.getProfile().data.email,
        },
      });

      setThoughtText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name)
    setThoughtText(value);
  };

  return loading ? (
    <div>loading</div>
  ) : (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Header as="h5">{doctor.name}</Card.Header>

          <Card.Text>Practice: {doctor.practice}</Card.Text>
          <Card.Text>
            Years of experience: {doctor.yearsofexperience}years
          </Card.Text>
          <Card.Text>Location: {doctor.location}</Card.Text>
          <Card.Text>Reviews: {doctor.reviews}</Card.Text>
          <Form 
          onSubmit={handleFormSubmit}
          >
            <Form.Group className="mb-3" controlId="review">
              <Form.Control
                type="text"
                name="thoughtText"
                value={thoughtText}
                placeholder="Enter a Review"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {" "}
              Submit{" "}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
