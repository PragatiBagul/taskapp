import TaskList from "./TaskList";
import useFetch from "../useFetch";
import useState from "react";
const TaskApp = () => {
    const { data:tasks, err, isPending } = useFetch('http://localhost:8000/tasks');
    return ( 
        <>
            {err && <div>{err}</div>}

            {isPending && <div>Loading ... </div>}
            
            {tasks && <TaskList tasks={tasks}/>}
        </>
    );
}
 
export default TaskApp;