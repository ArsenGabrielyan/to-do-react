import { useState } from "react";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import moment from "moment/moment";
import {initialState, arrActive } from "../data/initialData";

export default function ToDoForm(){
    const [data, setData] = useState(initialState);
    const validate = () => {
        let errorText = "", date = moment(data.date, "YYYY-MM-DD", true);
        if(!data.name || !data.date) errorText = "Required"
        if(data.name.trim().length < 2) errorText = "Invalid Name"
        if(!date.isValid()) errorText = "Invalid Date"
        if(errorText){
            setData({...data, errorBox: errorText})
            return false;
        }
        return true;
    }
    const handleSubmit = e =>{
        const isValid = validate();
        if(isValid){
            const item = { name: data.name, date: data.date, checked: false}
            arrActive.push(item)
            localStorage.setItem("items", JSON.stringify(arrActive))
            setData(initialState);
        }
        e.preventDefault()
    };
    const useToday=()=>{
        const now = new Date();
        setData({...data, date: `${now.getFullYear()}-${now.getMonth()<10?"0"+now.getMonth():now.getMonth()}-${now.getDate()}`})
    }
    return(
        <>
        <div className="menu">
            <div className="buttons">
                <Link to="/add" className="menuButton active">Add to do</Link>
                <span className="col btnAdd"><Icon icon="carbon:add-filled" /></span>
                <Link to="/" className="menuButton">To Do List</Link>
                <span className="col btnActiveToDos"><Icon icon="bi:card-list" /></span>
                <Link to="/completed" className="menuButton">Completed</Link>
                <span className="col btnCompletedToDos"><Icon icon="bi:list-check" /></span>
            </div>
        </div>
        <div className="container">
            <div className="addbg">
                <h2>Add Task</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="taskname" placeholder="Name" className="inputTxt" value={data.name} onChange={(e)=>setData({...data, name: e.target.value})}/>
                    <input type="date" name="taskdate" className="inputTxt" value={data.date} onChange={(e)=>setData({...data, date: e.target.value})}/>
                    <div className="btnControls">
                        <button className="colbtn" type="button" onClick={useToday}>Use Today</button>
                        <button className="colbtn" type="submit">Add Task</button>
                    </div>
                </form>
                <h2>{data.errorBox}</h2>
            </div>
        </div>
        </>
    )
}