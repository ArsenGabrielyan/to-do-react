import React from "react";
import {Icon} from "@iconify/react";
import ToDoItem from "./item";
import {Link} from "react-router-dom";

class ActiveToDos extends React.Component{
    render(){
        return(
            <>
                <div className="menu">
                    <div className="buttons">
                        <Link to="/add" className="menuButton">Add to do</Link>
                        <span className="pink btn1"><Icon icon="carbon:add-filled" /></span>
                        <Link to="/" className="menuButton active">To Do List</Link>
                        <span className="pink btn2"><Icon icon="bi:card-list" /></span>
                        <Link to="/completed" className="menuButton">Completed</Link>
                        <span className="pink btn3"><Icon icon="bi:list-check" /></span>
                    </div>
                </div>
                <div className="container">
                    <ToDoItem />
                    <div className="btnControls">
                        <button className="pinkbtn" id="moveBtn" disabled onClick={(e) => this.handleClick(e)}>Move</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ActiveToDos