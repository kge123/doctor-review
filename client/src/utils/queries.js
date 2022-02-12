import {gql} from '@apollo/client'

export const QUERY_DOCTOR = gql`
query getdoctor{
    doctor{
        _id
        name
        practice
        yearsofexperience
        location
    }
}
`