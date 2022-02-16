import { Container, Card, Button } from "react-bootstrap";
import { QUERY_DOCTOR } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Auth from "../../utils/auth";
import "./doctorstyle.css";

export default function Doctors() {
  const { loading, data } = useQuery(QUERY_DOCTOR);
  const doctorData = data?.doctor;
  const [updatedList, setUpdatedList] = useState([]);

  const handleChange = (e) => {
    const uplist = doctorData.filter(function (item) {
      return (
        item.practice.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });

    setUpdatedList(uplist);
    console.log(updatedList);
  };

  return (
    <Container>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search Practice"
        onChange={handleChange}
      />
      {updatedList &&
        updatedList.map((doctor) => (
          <Card className="doctorstyle" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Header className="header" as="h5">
                {doctor.name}
              </Card.Header>

              <Card.Text>Practice: {doctor.practice}</Card.Text>
              <Card.Text>
                Years of experience: {doctor.yearsofexperience}yrs
              </Card.Text>
              <Card.Text>Location: {doctor.location}</Card.Text>

              {Auth.loggedIn() && (
                <Button
                  variant="primary"
                  onClick={(event) =>
                    (window.location.href = `/Reviews/${doctor._id}`)
                  }
                >
                  Profile 💉
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
}
