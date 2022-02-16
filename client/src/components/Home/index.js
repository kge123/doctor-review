import { Container} from "react-bootstrap";
import React from "react";
// import { QUERY_DOCTOR } from "../../utils/queries";
// import { useQuery } from "@apollo/client";

const Home = () => {
  // const [searchedDoctors, setSearchedDoctors] = useState([]);
  // const { loading, data } = useQuery(QUERY_DOCTOR);

  // const doctorData = data?.doctor || {};

  // console.log(doctorData);
  //   const [searchInput, setSearchInput] = useState("");

  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();

  //     if (!searchInput) {
  //       return false;
  //     }

  //     try {
  //       // Dloop through the doctoData and filter out what the user is searching for? Are we setting one option to check against or is there multiple?
  //       const response = await fetch(
  //         `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
  //       );

  //       if (!response.ok) {
  //         throw new Error("something went wrong!");
  //       }

  //       const { items } = await response.json();

  //       const doctorData = items.map((doctor) => ({
  //         doctorId: doctor.id,
  //         name: doctor.volumeInfo.name,
  //         practice: doctor.volumeInfo.practice,
  //         yearsofexperience: doctor.yearsofexperience,
  //         location: doctor.volumeInfo.location,
  //       }));

  //       setSearchedDoctors(doctorData);
  //       setSearchInput("");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <Container>
      <h1>Search for Doctors in the Atlanta Metro area</h1>
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
