import logo from './logo.svg';
import './App.css';
import Task from './TaskApp/Task';
import { List } from "@mui/material";
import { useState } from 'react';
function App() {
  const [task, setTask] = useState();
  return (
    <div className="App">
      <List>
        <Task task={task} setTask={setTask} index={ "1"}/>
        </List> 
    </div>
  );
}

export default App;
