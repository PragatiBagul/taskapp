import * as React from 'react';
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Button, Container, CssBaseline, AppBar, Toolbar, Typography, Box, Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './ScrollTop';
import url from "./url";
const TaskApp = (props) => {
    const [refresh, setRefresh] = useState(false);
    const { data:tasks, err, isPending } = useFetch(refresh, url);
    
    return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Pragati's Task App
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container style={{backgroundColor:"ghostwhite"}} maxWidth="100%">
        <Box sx={{ my: 2 }}>
            <Container style={{padding:"1%",marginBottom:"1%"}} maxWidth="sm">
                <NewTask refresh={refresh} setRefresh={setRefresh} update={false} />    
            </Container>
            <AllTasks tasks={tasks} error={err} refresh={refresh} setRefresh={setRefresh} isPending={isPending} />  
            </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
    );
}
 
export default TaskApp;

