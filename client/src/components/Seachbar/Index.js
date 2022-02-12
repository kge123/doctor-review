// import JSONDATA from './Doctordata.json'
import { Container} from 'react-bootstrap'

import {QUERY_DOCTOR} from '../../utils/queries'
import { useQuery } from '@apollo/client'



export default function Seachbar(){
  // const [search, setsearch]= useQuery(QUERY_DOCTOR)

  return(
    <Container>
      <div >
        {/* <input type='text' placeholder="search practice" onChange={event=>{setsearch(event.target.value)}}></input> */}
        {/* {setsearch.filter((val)=>{
          if(search===" "){
            return val
          } else if (val.practice.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
              return val
          }
        
        }).map((val,key)=>{
          return(
            <div>
              
              <p>{val.practice}</p>
            </div>
          )

        })} */}
      </div>
    </Container>
  )
}


