import React,{Component} from 'react';
// import GridLayout from "react-grid-layout";
import './App.css';
class GetList extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             post:[],
//             loading:true
//         }
//     }
//     componentDidMount(){
//     axios.get('https://krds-assignment.github.io/aoc/api-assets/data.json')
//     .then(response => {
//         console.log(response)
//         this.setState({post:response.data})
//     })
//     .catch(error =>{
// console.log(error)
//     })
//     }
state = {
  
    person:[],
    image:""
}
async componentDidMount(){
    const url = "https://krds-assignment.github.io/aoc/api-assets/data.json";
    const response = await fetch(url);
    const data  = await response.json();
    this.setState({person:data.features,image:data.logo});
    // console.log(this.state.image);
}
    render(){
       const {person} = this.state;
  
        return (
           
            <div className="column" >
                <div ><img width="50px" src={this.state.image} /></div>
                 {person.map((person,index)=>
  <div >    
                     
                     <h1>{person.title}</h1> 
                     <img  src={person.logo} /> 
                         <p classname="desc">{person.desc}</p>
                        <div>                    
                         <img className="img" key={index} src={person.image} />
                          </div>
                         
                         </div>
                       
                       
                      
   
        
                                
                 )
                } 
               
            </div>
            
        )
    }
} 
export default GetList