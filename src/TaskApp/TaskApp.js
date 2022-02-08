import { Container } from "@mui/material";
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Button } from "@mui/material";
import url from "./url";
const TaskApp = () => {
    const [refresh, setRefresh] = useState(false);
    const { data:tasks, err, isPending } = useFetch(refresh, url);
    
    return (<Container style={{backgroundColor:"ghostwhite"}} maxWidth="100%">
            <Container style={{padding:"1%",marginBottom:"1%"}} maxWidth="sm">
                <NewTask refresh={refresh} setRefresh={setRefresh} update={false} />    
            </Container>
            <AllTasks tasks={tasks} error={err} refresh={refresh} setRefresh={setRefresh} isPending={isPending} />  
        </Container>
    );
}
 
export default TaskApp;

