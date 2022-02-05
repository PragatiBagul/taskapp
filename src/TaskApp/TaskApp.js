import { Container } from "@mui/material";
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";
const TaskApp = () => {
    return (<>
    <Container style={{ backgroundColor: "whitesmoke", padding:"1%"}} maxWidth="xl">
        <NewTask/>    
    </Container>
    <AllTasks/>
    </>
    );
}
 
export default TaskApp;