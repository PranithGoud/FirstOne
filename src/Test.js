import React,{useState} from "react";

const Test = () =>{
    const [name, srtName] = useState({
        name : "Pranith",
        age : 25
    });
    return(
        <div>
            <center>
                <h3>
                    Hello {name.name} and {name.age}
                </h3>
            </center>
        </div>
    )
}
export default Test