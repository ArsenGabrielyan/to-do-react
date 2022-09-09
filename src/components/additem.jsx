import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

class AddPage extends React.Component{
    constructor(props) {
        super(props);
        this.state= {v1:"", v2:""}

        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        alert("Name: " + this.state.v1 + ", Date: " + this.state.v2)
        localStorage.setItem("Name", this.state.v1)
        localStorage.setItem("Date", this.state.v2)
        e.preventDefault()
    }
    handleChange1(e){
        this.setState({v1: e.target.value})
    }
    handleChange2(e){
        this.setState({v2: e.target.value})
    }
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
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="taskname" placeholder="Name" className="inputTxt" value={this.state.v1} onChange={this.handleChange1}/>
                            <input type="date" name="taskdate" className="inputTxt" value={this.state.v2} onChange={this.handleChange2}/>
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