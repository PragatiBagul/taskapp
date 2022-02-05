import { List } from "@mui/material";
import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
const TaskList = ({taskList,setTaskList}) => {
    return (
        <List>
            {taskList.length != 0 ? 
            (taskList.map((task, index) => 
                <Task data={task} taskList={taskList} setTaskList={setTaskList} index={index} key={index} />)) :
                <></>
        }
            <AddTask tasks={taskList} setTasks={setTaskList}/>
        </List>
    );
}
 
export default TaskList;
