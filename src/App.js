import React from "react";
import Test from './Test';

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


export default Apps;