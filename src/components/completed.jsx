import React from "react";
import {Icon} from "@iconify/react";
import { arrCompleted} from "./additem";


function CompletedItem(){
    return(
        <>
        {arrCompleted.map((item,index)=>{
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
                    <button className="deleteBtn"><Icon icon="ant-design:delete-outlined" /></button>
                </div>
            </div>
            )
        })}
            </>
    )
}

export default CompletedItem