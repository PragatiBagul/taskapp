import { Card, CardActions, CardContent, Input, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import ClearOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NewTaskList from '../TaskList/NewTaskList';
import NewTaskContent from '../TaskContent/NewTaskContent';
const NewTask = ({refresh,setRefresh}) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskContent, setTaskContent] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [isTaskList, setIsTaskList] = useState(false);
    const clearTask = () => {
        setTaskTitle(null);
        if (isTaskList)
        {
            setTaskList([]);    
        }
        else
        {
            setTaskContent("");
        }
    }

    const addTask = (e) => {
        //e.preventDefault();
        emptyTaskAlert();   
        const taskType = isTaskList ? "list" : "content";
        const t = isTaskList ? { taskTitle, taskList,taskType} : { taskTitle, taskContent,taskType};
        setIsPending(true);
        fetch('http://localhost:8000/tasks/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(t)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        }).then(() => {
            setTaskTitle("");
        }).then(() => {
            isTaskList ? setTaskList([]) : setTaskContent("");
        }).then(() => {
            setRefresh(!refresh);
        });
    }

    const convertTaskType = () => {
        setIsTaskList(!isTaskList);
    }

    const emptyTaskAlert = () =>
    {
        if (isTaskList)
        {
            if ((taskTitle == null || taskTitle === "") &&
                (taskList.length == 0))    
            {
                alert("Cannot add an empty task");
            }
        }
        else
        {
            if ((taskTitle == null || taskTitle === "") &&
            (taskContent == null || taskContent === ""))    
            {
                alert("Cannot add an empty task");
            }
        }
    }
    return (<Card>
        <CardContent>
        <Input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
                fullWidth
                placeholder="Task Title"
            style={{ marginBottom: '0.5%' }} />
            {isTaskList ? <NewTaskList taskList={taskList} setTaskList={ setTaskList}/> : <NewTaskContent taskContent={taskContent} setTaskContent={ setTaskContent}/> }
        </CardContent>
        <CardActions>
            <Button onClick={clearTask}><ClearOutlinedIcon/>&emsp;Clear</Button>
            <Button onClick={addTask}><AddTaskIcon/>&emsp;Save</Button>
        </CardActions>
        <CardActions>
            {!isTaskList && <IconButton color="primary" onClick={convertTaskType}><FormatListBulletedOutlinedIcon fontSize='inherit' /></IconButton>}
            {isTaskList && <IconButton color="primary" onClick={convertTaskType}><ArticleOutlinedIcon fontSize='inherit' /></IconButton>}
        </CardActions>
    </Card> );
}
export default NewTask;