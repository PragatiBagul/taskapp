import { List } from "@mui/material";
import { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
const TaskList = ({tasks}) => {
    return (
        <List>
            {tasks.map((task, index) => 
                <Task data={task.task} index={index} key={index}/>)}
            <AddTask/>
        </List>
    );
}
 
export default TaskList;
