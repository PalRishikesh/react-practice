import { useDispatch } from "react-redux"
// import { deleteUsers } from "../store/slices/UserSlice";
import { clearAllUser } from "../store/action";





const DeleteAllUser = () => {
  const disptach = useDispatch();

  const deleteAllUser=()=>{
    // disptach(deleteUsers()) // Using state reducer
    disptach(clearAllUser()) // Using action
  }
  return (
    <button className="btn btn-delete"
                    onClick={()=>deleteAllUser()}>
                        Delete
                  </button>
  )
}



export default DeleteAllUser