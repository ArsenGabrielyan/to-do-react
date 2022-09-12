import './App.scss';
import {Routes, Route} from "react-router-dom";
import ActivePage from "./components/activeitem";
import CompletedPage from "./components/completeditemlist";
import AddPage from "./components/additem";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<ActivePage/>} />
            <Route path="/completed" element={<CompletedPage/>} />
            <Route path="/add" element={<AddPage/>} />
        </Routes>
    </div>
  );
}

export default App;
