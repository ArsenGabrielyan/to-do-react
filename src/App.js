import { Icon } from '@iconify/react';
import './App.css';
import ToDoItem from "./components/item";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="buttons">
          <button>Add to do</button>
            <span className="pink btn1"><Icon icon="carbon:add-filled" /></span>
          <button className="active">To do list</button>
            <span className="pink btn2"><Icon icon="bi:card-list" /></span>
          <button> Completed</button>
            <span className="pink btn3"><Icon icon="bi:list-check" /></span>
        </div>
      </div>
      <div className="container">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <div className="btnControls">
              <button className="pinkbtn">Move</button>
          </div>
      </div>
    </div>
  );
}

export default App;
