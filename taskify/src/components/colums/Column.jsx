import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import "./Column.css"
import Task from "../task/Task"

const Column = ({tasks}) => {
  return (
    <div className="column">
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {
        tasks.map((task)=>(
           <Task key={task.id} id={task.id} title={task.title}/>
        ))
      }
      </SortableContext>
    </div>
  )
}

export default Column
