import { Icon } from '@iconify/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="buttons">
          <button><Icon icon="carbon:add-filled" /> Add to do</button>
          <button><Icon icon="carbon:add-filled" /> Add to do</button>
          <button><Icon icon="carbon:add-filled" /> Add to do</button>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default App;
