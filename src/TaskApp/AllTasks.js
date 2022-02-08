import { CircularProgress,IconButton,Container,Grid, Card,CardContent, Typography,CardActions} from "@mui/material";
import ViewTaskList from "../TaskList/ViewTaskList";
import { useState } from "react";
import { Check } from "@mui/icons-material";
import OpenTask from "./OpenTask";
const AllTasks = ({ refresh,setRefresh,tasks, error, isPending }) => {
    const [raised, setRaised] = useState(-1);   
    const [open, setOpen] = useState(false);
    const [cardId,setCardId] = useState(-1);

    const handleClickOpen = (id) => {
        setCardId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container style={{padding:'1%'}} maxWidth="100%">
            { error && <h1>{error}</h1>}
            { isPending && <CircularProgress color="inherit" />}
            {!error &&
            !isPending &&
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {tasks.map((task,index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                            <Card key={index} sx={{maxHeight:'100%',maxWidth: '100%', margin: "0.25%"}} raised={raised == index ? true : false} onMouseOver={() => setRaised(index)} onMouseLeave={() => setRaised(-1)}  onClick={() => handleClickOpen(task.id)}>
                                <CardContent sx={{maxHeight:'100%'}}>
                                    <Typography variant="h5">{task.taskTitle}</Typography>
                                    <hr />
                                    {task.taskType == "content" &&
                                        <Typography className="alignLeft" variant="p">
                                                {task.taskContent}
                                        </Typography>}
                                    {task.taskType == "list" && <ViewTaskList taskList={task.taskList} />}
                                    <br/>
                                </CardContent>
                            </Card>
                        </Grid>))}
                        <OpenTask
        cardId={cardId}
        open={open}
                        onClose={handleClose}
                        refresh={refresh}
                        setRefresh={setRefresh}
      />
                </Grid>
            }
        </Container>);
}
export default AllTasks;