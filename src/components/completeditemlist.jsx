import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import ToDoItem from "./item";

class CompletedPage extends React.Component{
    render(){
        return(
            <>
                <div className="menu">
                    <div className="buttons">
                        <Link to="/add" className="menuButton">Add to do</Link>
                        <span className="pink btn1"><Icon icon="carbon:add-filled" /></span>
                        <Link to="/" className="menuButton">To Do List</Link>
                        <span className="pink btn2"><Icon icon="bi:card-list" /></span>
                        <Link to="/completed" className="menuButton active">Completed</Link>
                        <span className="pink btn3"><Icon icon="bi:list-check" /></span>
                    </div>
                </div>
                <div className="container">

                </div>
            </>
        )
    }
}

export default CompletedPage