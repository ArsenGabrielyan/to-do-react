import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

class AddPage extends React.Component{
    render(){
        return(
            <>
                <div className="menu">
                    <div className="buttons">
                        <Link to="/add" className="menuButton active">Add to do</Link>
                        <span className="pink btn1"><Icon icon="carbon:add-filled" /></span>
                        <Link to="/" className="menuButton">To Do List</Link>
                        <span className="pink btn2"><Icon icon="bi:card-list" /></span>
                        <Link to="/completed" className="menuButton">Completed</Link>
                        <span className="pink btn3"><Icon icon="bi:list-check" /></span>
                    </div>
                </div>
                <div className="container">
                    <div className="addbg">
                        <h2>Add Task</h2>
                        <form action="#">
                            <input type="text" name="taskname" placeholder="Name" className="inputTxt"/>
                            <div className="btnControls">
                                <button className="pinkbtn" type="submit">Add Task</button>
                            </div>
                        </form>
                    </div>
                    <div className="successbg">
                        <h2>This is a Message</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default AddPage