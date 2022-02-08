import { Checkbox, IconButton, ListItem, ListItemButton, ListItemText,TextField } from "@mui/material";
import { useState } from 'react';
import './Task.css';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const Task = ({task, index}) => {
    return (
    <ListItem disablePadding key={index}>        
        <ListItemButton>
            <CheckBoxOutlineBlankIcon/>&emsp;
            <ListItemText
                className={'incomplete'}
                id={index}>
                <span>{task}</span>
</ListItemText>
        </ListItemButton>
    </ListItem>);
}
 
export default Task;
