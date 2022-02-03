import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from 'react';
import './Task.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const Task = ({ task, index }) => {
    const [isCompleted, setIsCompleted] = useState(false);
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
    return (<ListItem disablePadding>        
        <ListItemButton>
            <Checkbox edge="start" id={`checkbox-${index}`} onChange={() => completeTask(index)}/>
            <ListItemText className={isCompleted ? 'completed':'incomplete'} id={index} primary={`${ task }`} />
        </ListItemButton>
    </ListItem>);
}
 
export default Task;