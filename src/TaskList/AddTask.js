/* eslint-disable react-hooks/rules-of-hooks */
import { ListItem, ListItemButton, IconButton, TextField } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from "react";
const AddTask = ({tasks,setTasks}) => {
    const [task, setTask] = useState("");
    const addTask = (e) =>
    {
        if (task !== "")
        {
            setTasks([...tasks, task]);
            setTask("");
        }   
        else
        {
            alert("Cannot add an empty task");  
        }
    }
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <IconButton edge="start" onClick={addTask}>
                    <AddOutlinedIcon/>
                </IconButton>
                <TextField
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                            fullWidth
                            type="text"
                            size="small"
                        />
                        <IconButton edge="end"
                            onClick={()=>setTask("")}
                    color="primary"
                    disabled={task === "" ? true : false}
                    >
                            <ClearIcon/>
                        </IconButton>
            </ListItemButton>
    </ListItem> );
}
 
export default AddTask;