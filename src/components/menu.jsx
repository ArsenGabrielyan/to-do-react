import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

export default function Menu({activeElement=""}){
     return <div className="menu">
     <div className="buttons">
         <Link to="/add" className={`menuButton${activeElement==='add'?' active':''}`}>Add to do</Link>
         <span className="col btnAdd"><Icon icon="carbon:add-filled" /></span>
         <Link to="/" className={`menuButton${activeElement==='pending'?' active':''}`}>To Do List</Link>
         <span className="col btnActiveToDos"><Icon icon="bi:card-list" /></span>
         <Link to="/completed" className={`menuButton${activeElement==='completed'?' active':''}`}>Completed</Link>
         <span className="col btnCompletedToDos"><Icon icon="bi:list-check" /></span>
     </div>
 </div>
}