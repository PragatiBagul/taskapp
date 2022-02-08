import { Input,Button, Dialog, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useFetch from './useFetch';
import NewTaskList from '../TaskList/NewTaskList';
import NewTaskContent from '../TaskContent/NewTaskContent';
import ClearOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useState } from 'react';
import url from "./url";
const OpenTask = ({ refresh,setRefresh,onClose, cardId, open }) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskContent, setTaskContent] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [isTaskList, setIsTaskList] = useState(false);

  useEffect(() => {
    if (cardId != -1)
    {
      fetch(url+'/'+cardId)
      .then(res => {
        return res.json();
      })
      .then(task => {
        setTaskTitle(task.taskTitle);
        console.log(taskTitle);
        if (task.taskType === "content")
        {
          setIsTaskList(false);
          setTaskContent(task.taskContent);
        } else {
          setIsTaskList(true);
          setTaskList(task.taskList);
        }
      })
    }  
  }, [cardId])

  const handleClose = () => {
      onClose();
  };

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

const updateTask = (e) => {
    //e.preventDefault();
    emptyTaskAlert();   
    const taskType = isTaskList ? "list" : "content";
    const t = isTaskList ? { taskTitle, taskList,taskType} : { taskTitle, taskContent,taskType};
    setIsPending(true);
    fetch(url+'/'+cardId, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t)
    }).then(() => {
        console.log('Task updated');
        setIsPending(false);
    }).then(() => {
        setTaskTitle("");
    }).then(() => {
        isTaskList ? setTaskList([]) : setTaskContent("");
    }).then(() =>
      setRefresh(!refresh)
    ).then(() =>
      handleClose()
    )
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
  
const deleteTask = () => {
  alert("Are you sure you want to delete the task?");
    const taskType = isTaskList ? "list" : "content";
    const t = isTaskList ? { taskTitle, taskList,taskType} : { taskTitle, taskContent,taskType};
    setIsPending(true);
    fetch(url+'/'+cardId, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    }).then(() => {
        console.log('Task deleted');
        setIsPending(false);
    }).then(() =>
      setRefresh(!refresh)
    ).then(() =>
      handleClose()
    )
}
  return (
  <Dialog onClose={handleClose} open={open}>
    <Card sx={{ minWidth: 275 }}>
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
          <Button onClick={updateTask}><AddTaskIcon />&emsp;Save</Button>
          <Button color="error" onClick={deleteTask}><DeleteOutlineOutlinedIcon fontSize='inherit' />&emsp;Delete</Button>
      </CardActions>
    </Card>
  </Dialog>
    );
  }
  
  OpenTask.propTypes = {
    setRefresh: PropTypes.func.isRequired,
    refresh: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    cardId: PropTypes.number.isRequired,
  };
  
export default OpenTask;