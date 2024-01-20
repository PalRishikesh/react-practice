const Task = (props) => {
    function onDeleteTask(taskId){
        console.log("Delete id: ",taskId);
        props.deleteTaskAttribute(taskId);
    }
  return (
    <>
        {
            props.tasks.map((task)=>{
                return <div key={task.id}><span>{task.value} </span> <button onClick={()=>{
                    onDeleteTask(task.id)
                }}>Delete</button></div>
            })
        }
    </>
  )
}

export default Task