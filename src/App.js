import React from "react";
import Test from './Test';
import App from './App';

const App = () => {
  let name = "Pranit"
  return (<div> <center><h3> Hello {name}</h3></center></div>)
}

class Apps extends React.Component{
  state = {
    name :"Pranith",
    age:"26"

  }
  render(){
    return(
      <div>
        <center>
          <h3>
            <Test name = {this.state.name}/>
            </h3>

            
            </center>
            </div>
    )
  }
}

const func = () => {
const arr = ["img.jpg", "img2.jpg", "img3.jpg"]
  return (
    <div className ='App'> 
      <h3>Hello world</h3>
    {arr.map((item,index)= ()=> {<Img key = {index} src={item}/>})}

    </div>
  )
}

export default Apps;