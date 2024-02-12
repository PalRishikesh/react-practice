import { useReducer,useEffect } from "react"
import { inventoryReducer, initialState } from "../reducers/inventoryReducer"
import axios from "axios"
import { FETCH_ACTIONS } from "../actions";

const InventoryList = () => {

  const [state, dispatch] = useReducer(inventoryReducer, initialState);
  const { items, loading, error } = state;
  console.log(items, loading, error);

  useEffect(()=>{
      dispatch({
        type:FETCH_ACTIONS.PROGRESS
      });

      const getItems = async()=>{
        try {
          let response = await axios.get("http://localhost:3000/eatables");
          if(response.status === 200){
            dispatch({
              type:FETCH_ACTIONS.SUCCESS,
              data: response.data
            })
          }

        } catch (err) {
          console.error(err);
          dispatch({
            type:FETCH_ACTIONS.ERROR,
            error: err.message
          })
        }
      }
      getItems()
  },[])

  return (
    <div className="flex flex-col m-8 w-2/5">
      {
        loading?(
          <p>Loading..</p>
        ): error?(
          <p>{error}</p>
        ):(
          <ul className="flex flex-col">
            <h2 className="text-3xl my-4">Item List</h2>
            {
              items.map((item)=>(
                <li key={item.id}>
                    <p>
                      <strong>{item.name}</strong> {' '} {item.picture} {' '} of type {item.type}
                      {' '} Costs <strong>{item.price}</strong>
                    </p>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default InventoryList