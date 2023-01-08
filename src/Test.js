import React,{useState} from "react";

const Test = () =>{
    const [name, srtName] = useState({
        name : "Pranith"
    });
    const change = e =>{
        srtName({...name, [e.target.name]:e.target.value})
    }
    const submit = e =>{
       
        console.log(name)
    }
    return(
        <div>
            <center>
                <h3>
                    Hello {name.name} <br/> <button onClick={() => alert("Hello")}>Click me </button>
                </h3>
                <form onSubmit={submit}><label>Username</label><input type='text' name = 'name' onChange={change}/>
                <input type='submit'/>               
                </form>

            </center>
        </div>
    )
}
export default Test