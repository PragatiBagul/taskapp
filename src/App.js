import logo from './logo.svg';
import './App.css';
import TaskApp from './TaskApp/TaskApp';
import { List } from "@mui/material";
import { useState } from 'react';
function App() {
  const [task, setTask] = useState();
  return (
    <div className="App">
      <TaskApp/>
    </div>
  );
}

export default App;
