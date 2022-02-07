import { List } from "@mui/material";
import ViewTask from "./ViewTask";
const ViewTaskList = ({ taskList }) => {
    return (
        <List>
            {taskList.length != 0 ? 
            (taskList.map((task, index) => 
                <ViewTask task={task} taskList={taskList} index={index} key={index} />)) :
            <></>
        }
        </List>
    );
}
 
export default ViewTaskList;