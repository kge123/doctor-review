import { Container, Col, Row } from "react-bootstrap";
import { QUERY_DOCTOR } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import React, {useState} from 'react';

export default function Doctors() {
    const { loading, data } = useQuery(QUERY_DOCTOR);
    var [ updatedList, setUpdatedList] = useState([]);
    var doctorData = data?.doctor;
    
    const handleChange = (e) => {
        
        var uplist = doctorData.filter(function(item){
          return item.practice.toLowerCase().search(
            e.target.value.toLowerCase()) !== -1;
        });

        setUpdatedList(uplist)
        console.log(updatedList)
    }

    
    return (
        <Container>
            <input type="text" className="form-control form-control-lg" placeholder="Search Practice" onChange={handleChange}/>
            {updatedList && updatedList.map(doctor =>
            <table>
                <tbody>
                
                <tr key={doctor._id}>
                    
                    
                    <td>{doctor.name}</td>
                    
                    <td>{doctor.practice}</td>
                    
                    <td>{doctor.yearsofexperience}</td>
                    
                    <td>{doctor.location}</td>
                </tr>
                
                </tbody>
                </table>)}
                
                
        </Container>
    )
}

// var FilteredList = React.createClass({
//     filterList: function(event){
//       var updatedList = this.state.initialItems;
//       updatedList = updatedList.filter(function(item){
//         return item.toLowerCase().search(
//           event.target.value.toLowerCase()) !== -1;
//       });
//       this.setState({items: updatedList});
//     },
//     getInitialState: function(){
//        return {
//          initialItems: [
//            "Roberto",
//            "Kevin"
//          ],
//          items: []
//        }
//     },
//     componentWillMount: function(){
//       this.setState({items: this.state.initialItems})
//     },
//     render: function(){
//       return (
//         <div className="filter-list">
//           <form>
//           <fieldset className="form-group">
//           <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
//           </fieldset>
//           </form>
//         <List items={this.state.items}/>
//         </div>
//       );
//     }
//   });
  
//   var List = React.createClass({
//     render: function(){
//       return (
//         <ul className="list-group">
//         {
//           this.props.items.map(function(item) {
//             return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//           })
//          }
//         </ul>
//       )  
//     }
//   });
  
//   React.render(<FilteredList/>, document.getElementById('app'));