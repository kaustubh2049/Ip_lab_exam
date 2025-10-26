import React,{Component} from "react";
class ClassComponents extends Component{
    render(){
        return(
            <div
            style={{
                backgroundColor:"black",
                borderRadius:"10px",
                padding:"10px",
                margin:"30px",
            }}
            >
                <h2 style={{ color:"white"}}> Class Componenet demostration</h2>
                <p style={{color:"white"}}> HELLO FROM CLASS COMPONENT</p>
            </div>
        )
    }
}
export default ClassComponents;