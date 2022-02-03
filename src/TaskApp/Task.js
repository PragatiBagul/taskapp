import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText,TextField } from "@mui/material";
import { useState } from 'react';
import './Task.css';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const Task = ({ task, setTask,index }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const completeTask = (index) => {
        if (document.getElementById(`checkbox-${index}`).checked)
        {
            setIsCompleted(true);
        }
        else
        {
            setIsCompleted(false);
        }
    }
    const handleChange = ({target}) => {
        setTask(target.value);
    }
    return (<ListItem disablePadding>        
        <ListItemButton>
            <Checkbox edge="start" id={`checkbox-${index}`} disabled={isEditable} onChange={() => completeTask(index)} />
            {
                isEditable ?
                    <>
                        <TextField
                            fullWidth
                            type="text"
                            size="small"
                            defaultValue={task}
                            onChange={handleChange}
                        />
                        <IconButton edge="end"
                            onClick={() => setIsEditable(false)}
                            color="primary">
                            <DoneOutlinedIcon />
                        </IconButton>
                    </> :
                    <>
                        <ListItemText
                            className={isCompleted ? 'completed' : 'incomplete'}
                            id={index}>
                            <span>{task}</span>
                        </ListItemText>
                        <IconButton edge="end" onClick={() => setIsEditable(true)} color="primary">
                    <EditOutlinedIcon/>
                </IconButton></>
            }
        </ListItemButton>
    </ListItem>);
}
 
export default Task;

/*          
             {
                    isEditable ?
                        (
                        <IconButton edge="end" onClick={setIsEditable(false)} color="primary">
                    <DoneOutlinedIcon/>
                </IconButton>
                    </>
                        ) : ( <><ListItemText className={isCompleted ? 'completed' : 'incomplete'} id={index}>
                        <span>{task}</span></ListItemText><IconButton edge="end" onClick={setIsEditable(true)} color="primary">
                    <EditOutlinedIcon/>
                </IconButton></>)
                }   
        </ListItemButton> */