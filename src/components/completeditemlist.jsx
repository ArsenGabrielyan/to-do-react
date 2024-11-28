import { arrCompleted } from "../data/initialData";
import Menu from "./menu";
import { useState } from "react";
import {Icon} from "@iconify/react";

export default function CompletedToDos(){
    const [completed, setCompleted] = useState(arrCompleted);
    const clickItem = (i)=>{
        arrCompleted.splice(i,1);
        setCompleted(arrCompleted);
        localStorage.setItem("completed", JSON.stringify(arrCompleted));
        window.location.reload();
    }
    return <>
        <Menu activeElement="completed"/>
        <div className="container">
            {arrCompleted.length ? completed.map((item,i)=><div className="toDoItem" key={i}>
            <div className="item1">
                <div className="left"><h3>{item.name}</h3></div>
                <div className="right">
                    <p>
                        <span className="green iconSpace">
                            <span className="txtSpace"></span>
                            <Icon icon="clarity:date-line"/>
                        </span>
                        {item.date}
                    </p>
                </div>
            </div>
            <div className="item2">
                <button className="deleteBtn" onClick={()=>clickItem(i)}><Icon icon="ant-design:delete-outlined"/></button>
            </div>
        </div>) : <h2 className="txt">You've Completed All of Them</h2>}
    </div>
    </>
}