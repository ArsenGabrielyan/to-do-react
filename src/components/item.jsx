import {Icon} from "@iconify/react";
import { arrActive, arrCompleted } from "../data/initialData";
import { useState } from "react";

export default function ToDoItem(){
    const [pending, setPending] = useState(arrActive);
    const checkbox = (e,i)=>{
        arrActive[i].checked = e.target.checked;
        const isChecked = arrActive.some(item=>item.checked);
        if(isChecked){
            document.getElementById("moveBtn").removeAttribute("disabled")
            document.getElementById("moveBtn").addEventListener("click", ()=>{
                if(arrActive[i].checked){
                    arrCompleted.push(arrActive[i]);
                    arrActive.splice(i,1);
                    setPending(arrActive);
                }
                localStorage.setItem("items", JSON.stringify(arrActive));
                localStorage.setItem("completed", JSON.stringify(arrCompleted));
                window.location.reload();
            })
        } else document.getElementById("moveBtn").setAttribute("disabled",true);
    }
    return <>
        {pending.map((item,i)=>(
            <div className="toDoItem" key={i}>
                <div className="item1">
                    <div className="left"><h3>{item.name}</h3></div>
                    <div className="right">
                        <p>
                            <span className="green iconSpace"><span className="txtSpace"></span><Icon icon="clarity:date-line"/></span>
                            {item.date}
                        </p>
                    </div>
                </div>
                <div className="item2"><input type="checkbox" name="taskcheck" onChange={(e)=>checkbox(e,i)} value={i} id="taskCheckbox"/></div>
            </div>
        ))}
    </>
}