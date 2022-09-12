import React from "react";
import {Icon} from "@iconify/react";
import { arrActive } from "./additem";

function ToDoItem(){
    const [checked, setChecked] = React.useState(false)
    const isSubmitted = ()=>{
        if(checked){
            document.getElementById("movebtn").removeAttribute("disabled")
        } else{
            document.getElementById("movebtn").setAttribute("disabled", true)
        }
    }
    
    React.useEffect(()=> isSubmitted());
    return(
        <>
        {arrActive.map((item,index)=>{
            return(
                <div className="toDoItem" key={index}>
                    <div className="item1">
                    <div className="left">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="right">
                        <p><span className="green iconSpace"><span className="txtSpace"></span> <Icon icon="clarity:date-line"/></span>{item.date}</p>
                    </div>
                </div>
                <div className="item2">
                    <input type="checkbox" onClick={(e)=> setChecked(e.target.value)}/>
                </div>
            </div>
            )
        })}
            </>
    )
}

export default ToDoItem