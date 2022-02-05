import { useState } from 'react';
import { CardContent,Input,TextField} from "@mui/material";
const NewTaskContent = ({taskContent,setTaskContent}) => {
    
    return (   
        <TextField
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            multiline
            fullWidth
            minRows={4}
            maxRows={8} />);
}
export default NewTaskContent;