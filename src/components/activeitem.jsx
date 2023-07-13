import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";
import ToDoItem from "./item";
import { arrActive } from "../data/initialData";

export default function ActiveItem(){
    return(
        <>
            <div className="menu">
                <div className="buttons">
                    <Link to="/add" className="menuButton">Add to do</Link>
                    <span className="col btnAdd"><Icon icon="carbon:add-filled"/></span>
                    <Link to="/" className="menuButton active">To Do List</Link>
                    <span className="col btnActiveToDos"><Icon icon="bi:card-list"/></span>
                    <Link to="/completed" className="menuButton">Completed</Link>
                    <span className="col btnCompletedToDos"><Icon icon="bi:list-check"/></span>
                </div>
            </div>
            <div className="container">
                {arrActive.length ? <>
                    <ToDoItem />
                    <div className="btnControls">
                        <button className="colbtn" id="moveBtn" disabled>Move</button>
                    </div>
                </>: <h2 className="txt">There are No Pending Tasks</h2>}
            </div>
        </>
    )
}