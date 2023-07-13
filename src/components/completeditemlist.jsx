import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import CompletedItem from "./completed";
import { arrCompleted } from "../data/initialData";

export default function CompletedToDos(){
    return(
        <>
            <div className="menu">
                <div className="buttons">
                    <Link to="/add" className="menuButton">Add to do</Link>
                    <span className="col btnAdd"><Icon icon="carbon:add-filled" /></span>
                    <Link to="/" className="menuButton">To Do List</Link>
                    <span className="col btnActiveToDos"><Icon icon="bi:card-list" /></span>
                    <Link to="/completed" className="menuButton active">Completed</Link>
                    <span className="col btnCompletedToDos"><Icon icon="bi:list-check" /></span>
                </div>
            </div>
            <div className="container">
                {arrCompleted.length ? <CompletedItem /> : <h2 className="txt">You've Completed All of Them</h2>}
            </div>
        </>
    )
}