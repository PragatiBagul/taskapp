import { Card, CardActions, CardContent, Input, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import ClearOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NewTaskList from '../TaskList/NewTaskList';
import NewTaskContent from '../TaskContent/NewTaskContent';
const NewTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskContent, setTaskContent] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState();
    const [isTaskList, setIsTaskList] = useState(false);
    //For content task
    
    //For listed task

    const clearTask = () => {
        setTaskTitle(null);
    }
    const addTask = () => {
        
    }

    const convertTaskType = () => {
        setIsTaskList(!isTaskList);
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