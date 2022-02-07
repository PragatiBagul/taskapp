import { Container,Grid, Card,CardContent,Button, Typography} from "@mui/material";
import ViewTaskList from "../TaskList/ViewTaskList";
import useFetch from "./useFetch";
const AllTasks = ({tasks,error,isPending}) => {
    return (<Container style={{backgroundColor:"whitesmoke"}}maxWidth="xl">
            { error && <h1>{error}</h1>}
            { isPending && <h1>Loading</h1>}
            {!error &&
            !isPending &&
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {tasks.map((task,index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                            <Card sx={{ boxShadow: 3 }} sx={{ maxWidth: 345,margin:"1%" }}>
                                <CardContent>
                                    <Typography variant="h5">{task.taskTitle}</Typography>
                                    <hr />
                                    {task.taskType == "content" &&
                                        <Typography className="alignLeft" variant="p">
                                            {task.taskContent}
                                        </Typography>}
                                    {task.taskType == "list" && <ViewTaskList taskList={task.taskList}/>}
                                </CardContent>
                            </Card>
                        </Grid>))}
                </Grid>}
        </Container>);
}
export default AllTasks;