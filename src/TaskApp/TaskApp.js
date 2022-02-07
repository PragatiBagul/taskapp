import { Container } from "@mui/material";
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Button } from "@mui/material";
const TaskApp = () => {
    const url = "http://localhost:8000/tasks";
    const [refresh, setRefresh] = useState(false);
    const { data:tasks, err, isPending } = useFetch(refresh, url);
    
    return (<>
        <Container style={{ backgroundColor: "whitesmoke", padding:"1%"}} maxWidth="xl">
            <NewTask refresh={refresh} setRefresh={ setRefresh}/>    
        </Container>
        <AllTasks tasks={tasks} error={err} isPending={ isPending}/>
    </>
    );
}
 
export default TaskApp;