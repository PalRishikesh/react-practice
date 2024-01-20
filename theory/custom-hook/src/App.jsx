import { useEffect, useRef, useState } from "react";
import Decrement from "./Components/Decrement";
import Increment from "./Components/Increment";
import useHttp from "./Utilities/user-http";
import Task from "./Components/Task";

const firebaseUrl = 'https://*.firebaseio.com';

function App() {
  let taskRef = useRef();
  let [allTask, setAllTask] = useState([]);
  let [errorMessage, setErrorMessage] = useState(null);

  let [errorGet, sendGetRequest] = useHttp();
  let [errorPost, sendPostRequest] = useHttp();
  let [errorDelete, sendDeleteRequest] = useHttp();

  // This function is called after successfully API Called Start Here
  function getAllTask(data) {
    // Data will gona return the promise
    data.then((task) => {
      let taskList = [];
      for (const key in task) {
        taskList.push({
          id: key,
          value: task[key],
        });
      }
      setAllTask(taskList);
      console.log("taskList: ", taskList);
    });
    setErrorMessage(errorGet);
  }

  function createPostTask(data) {
    data.then((response) => {
      console.log("Post Response : ", response);
      fetchTask();
    });
    setErrorMessage(errorPost);
  }
  function deleteTaskResponse(data) {
    data.then((response) => {
      console.log("Delete Response : ", response);
      fetchTask();
    });
    setErrorMessage(errorDelete);
  }

 // This function is called after successfully API Called End Here

  useEffect(() => {
    fetchTask();
  }, []);

  // Function for calling our custom hook function start here
  function fetchTask() {
    sendGetRequest(
      `${firebaseUrl}/task.json`,
      "GET",
      null,
      getAllTask
    );
  }

  function createTask() {
    sendPostRequest(
      `${firebaseUrl}/task.json`,
      "POST",
      taskRef.current.value,
      createPostTask
    );
  }

  function deleteTask(taskId) {
    console.log("Click task:");
    sendDeleteRequest(
      `${firebaseUrl}/task/${taskId}.json`,
      "DELETE",
      null,
      deleteTaskResponse
    );
  }

  // Function for calling our custom hook function End here

  function deleteTaskFun(taskId) {
    deleteTask(taskId);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {/* <Increment/>
      <Decrement/> */}

        <input type="text" ref={taskRef} />
        <button onClick={createTask}>Create</button>
      </div>

      <div>{errorGet && <div>{errorGet}</div>}</div>

      <Task tasks={allTask} deleteTaskAttribute={deleteTaskFun} />
    </div>
  );
}
export default App;
