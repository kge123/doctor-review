// import JSONDATA from './Doctordata.json'
import { Container, Card, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Form from 'react-bootstrap/Form'

import {QUERY_SINGLEDOCTOR} from '../../utils/queries'
import { useQuery } from '@apollo/client'
// import { useState } from "react";


export default function Reviews(){
  
  var {id}= useParams()
  const { loading, data } = useQuery(QUERY_SINGLEDOCTOR,{
    variables:{id}
  });
  var doctor = data?.singledoctor;
 
  
 
  
 
  return( loading?<div>loading</div>:
    <Container>
       <Card style={{ width: '18rem' }}>
            
            <Card.Body>
            <Card.Header as="h5">{doctor.name}</Card.Header>
              
              <Card.Text>Practice: {doctor.practice}</Card.Text>
              <Card.Text>Years of experience: {doctor.yearsofexperience}years</Card.Text>
              <Card.Text>Location: {doctor.location}</Card.Text>
              <Card.Text>Reviews: {doctor.reviews}</Card.Text>
              <Form>
              <Form.Group className="mb-3" controlId="review">
              <Form.Control type="text" placeholder="Enter a Review" />
              </Form.Group>
              <Button variant="primary" type="submit"> Submit </Button>
              </Form>
              
              
            </Card.Body>
          </Card>
    </Container>
  )
}


