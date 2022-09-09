import React from "react";
import {Icon} from "@iconify/react";

class ToDoItem extends React.Component{
    render(){
        return(
            <div className="toDoItem">
                <div className="item1">
                    <div className="left">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                    <div className="right">
                        <p><span className="green"><Icon icon="clarity:date-line"/></span> 10/12/22</p>
                    </div>
                </div>
                <div className="item2">
                    <input type="checkbox"/>
                </div>
            </div>
        )
    }
}

export default ToDoItem