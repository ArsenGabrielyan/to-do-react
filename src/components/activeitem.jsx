import React from "react";
import {Icon} from "@iconify/react";
import ToDoItem from "./item";
import {Link} from "react-router-dom";

class ActiveToDos extends React.Component{
    constructor(props){
        super(props);
        this.state = {disabled: false}
        this.handleClick = this.handleClick.bind(this)
    }
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
                        <button className="pinkbtn" id="moveBtn" disabled>Move</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ActiveToDos