/* eslint-disable react-hooks/rules-of-hooks */
import { ListItem, ListItemButton, IconButton, TextField } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from "react";
const AddTask = () => {
    const [task, setTask] = useState("");
    const [isPending, setIsPending] = useState(false);
    const addTask = (e) => {
        //e.preventDefault();
        setIsPending(true);
        const t = {task}
        if (task !== "")
        {
            fetch('http://localhost:8000/tasks/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(t)
            }).then(() => {
                setIsPending(false);
            })
        }
        else {
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
                            color="primary">
                            <ClearIcon/>
                        </IconButton>
            </ListItemButton>
    </ListItem> );
}
 
export default AddTask;