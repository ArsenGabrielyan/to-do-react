import React from "react";
import {Icon} from "@iconify/react";
import ToDoItem from "./item";
import {Link} from "react-router-dom";

export default class ActiveToDos extends React.Component{
    render(){
        return(
            <>
                <div className="menu">
                    <div className="buttons">
                        <Link to="/add" className="menuButton">Add to do</Link>
                        <span className="col btnAdd"><Icon icon="carbon:add-filled" /></span>
                        <Link to="/" className="menuButton active">To Do List</Link>
                        <span className="col btnActiveToDos"><Icon icon="bi:card-list" /></span>
                        <Link to="/completed" className="menuButton">Completed</Link>
                        <span className="col btnCompletedToDos"><Icon icon="bi:list-check" /></span>
                    </div>
                </div>
                <div className="container">
                    <ToDoItem />
                    <div className="btnControls">
                        <button className="colbtn" id="moveBtn" disabled>Move</button>
                    </div>
                </div>
            </>
        )
    }
}