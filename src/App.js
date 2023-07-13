import './App.scss';
import {Routes, Route} from "react-router-dom";
import ActiveToDos from './components/activeitem';
import CompletedToDos from './components/completeditemlist';
import ToDoForm from './components/additem';

export default function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<ActiveToDos/>} />
            <Route path="/completed" element={<CompletedToDos/>} />
            <Route path="/add" element={<ToDoForm/>} />
        </Routes>
    </div>
  );
}