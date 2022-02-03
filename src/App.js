import logo from './logo.svg';
import './App.css';
import Task from './TaskApp/Task';
import { List } from "@mui/material";
function App() {
  return (
    <div className="App">
      <List>
        <Task task={"Hello"} index={ "1"}/>
        <Task task={"Hello"} index={ "2"}/>
        <Task task={"Hello"} index={ "3"}/>
        <Task task={"Hello"} index={ "4"}/>
        <Task task={"Hello"} index={ "5"}/>
        </List> 
    </div>
  );
}

export default App;
