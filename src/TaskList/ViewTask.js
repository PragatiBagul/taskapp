import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText,TextField } from "@mui/material";
import { useState } from 'react';
import './Task.css';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Task = ({task, index}) => {
    return (
    <ListItem disablePadding key={index}>        
        <ListItemButton>
            <Checkbox edge="start" id={`checkbox-${index}`} readOnly />
            <ListItemText
                className={'incomplete'}
                id={index}>
                <span>{task}</span>
</ListItemText>
        </ListItemButton>
    </ListItem>);
}
 
export default Task;
