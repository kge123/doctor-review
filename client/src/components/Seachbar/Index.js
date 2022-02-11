import JSONDATA from './Doctordata.json'
import { Container} from 'react-bootstrap'
import { useState } from 'react'



export default function Seachbar(){
  const [search, setsearch]= useState(' ')
  return(
    <Container>
      <div className='searchbar'>
        <input type='text' placeholder="search practice" onChange={event=>{setsearch(event.target.value)}}></input>
        {JSONDATA.filter((val)=>{
          if(search==" "){
            return val
          } else if (val.practice.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
              return val
          }
        
        }).map((val,key)=>{
          return(
            <div>
              
              <p>{val.practice},{val.location}</p>
            </div>
          )

        })}
      </div>
    </Container>
  )
}
