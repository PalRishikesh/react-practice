import React, { useState } from "react";
import uuid from 'react-uuid'
import {TiTick, TiTrash} from 'react-icons/ti';

const Header = () => {
  return (
    <>
      <header>
        <h1>My Bucket List</h1>
      </header>
    </>
  );
};

const BucketList = () => {
  const [state, setState] = useState([]);
  const [wish, setWish] = useState({
    title: "",
    by: "",
  });

  const handleWish = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    // console.log("key: ",key);
    // console.log("value: ",value);
    setWish({...wish,[key]:value})

  };
  const addWish = () => {
    console.log(wish);
    console.log(uuid);
    // Update with extra keys
    const updated = {...wish, "id":uuid(),"isDone":false}
    setState([...state,updated])

  };

  const markDone = (id)=>{
    console.log(`With with ${id} is done!`);
    const index = state.findIndex((wish)=>wish.id == id);
    const doneWish = [...state];
    doneWish[index].isDone =true;
    setState(doneWish);
  }

  const deleteWish = (id)=>{
    const filteredWish = state.filter((wish)=>wish.id != id );
    setState([...filteredWish]);
  }

  return (
    <>
      <Header />
      <div>
        <ul>
            {
                state.map((item)=>(
                    <li key={item.id}>
                        <span style={{ textDecoration: item.isDone ? "line-through":""}}>
                            <strong>{item.title}</strong> is due by {item.by}
                        </span>
                        <span><TiTick size={24} onClick={(id)=>markDone(item.id)}/></span>
                        <span><TiTrash size={24} onClick={(id)=>deleteWish(item.id)}/></span>
                    </li>
                ))
            }
        </ul>
        <div>
          I want to do
          <input type="text" name="title" onChange={handleWish} /> By{" "}
          <input type="date" name="by" onChange={handleWish} />
          <button className="wishBtn" onClick={addWish}>
            Make a Wish{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default BucketList;
