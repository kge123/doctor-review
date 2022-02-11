import {gql} from '@apollo/client'

export const QUERY_DOCTOR = gql`
{
    doctor{
        _id
        name
        practice
        yearsofexperience
        location
    }
}
`