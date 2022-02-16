import { gql } from "@apollo/client";

export const QUERY_DOCTOR = gql`
  query getalldoctors {
    doctor {
      _id
      name
      practice
      yearsofexperience
      location
    }
  }
`;

export const QUERY_SINGLEDOCTOR = gql`
  query getsingledoctor($id: ID) {
    singledoctor(_id: $id) {
      _id
      name
      practice
      yearsofexperience
      location
      reviews {
        _id
        thoughtText
        createat
      }
    }
  }
`;
