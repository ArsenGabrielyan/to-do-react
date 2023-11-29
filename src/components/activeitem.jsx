import ToDoItem from "./item";
import { arrActive } from "../data/initialData";
import Menu from "./menu";

export default function ActiveItem(){
    return <>
        <Menu activeElement="pending"/>
        <div className="container">
            {arrActive.length ? <>
                <ToDoItem />
                <div className="btnControls">
                    <button className="colbtn" id="moveBtn" disabled>Move</button>
                </div>
            </>: <h2 className="txt">There are No Pending Tasks</h2>}
        </div>
    </>
}