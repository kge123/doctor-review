// import JSONDATA from './Doctordata.json'
import { Container, Col, Row, Card,Button} from "react-bootstrap";
import { useParams } from "react-router-dom";


import {QUERY_SINGLEDOCTOR} from '../../utils/queries'
import { useQuery } from '@apollo/client'
import { useState } from "react";


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
              <Card.Text>Years of experience: {doctor.yearsofexperience}yrs</Card.Text>
              <Card.Text>Location: {doctor.location}</Card.Text>
               
              
              
              
            </Card.Body>
          </Card>
    </Container>
  )
}


