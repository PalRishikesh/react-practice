import React, { useState, useTransition } from 'react';
import './App.css';

export default function App({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);
  const [isPending, startTransition]  = useTransition();

  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Filter the user list based on the search term
    // setFiltered(users.filter(
    //   (item) => item.name.includes(value)
    // ));
    startTransition(()=>{
      setFiltered(users.filter((item)=>item.name.includes(value)))
    })
  };

  return (
    <div className="container">
      <h1>User Finder</h1>
      <div>
        {
          isPending ? (
            <div>Loading...</div>
          ):(
            <p>{users.length !== filtered.length 
              ? `${filtered.length} matches` 
              : null}</p>
          )
        }
      </div>
      <input onChange={handleChange} value={searchTerm} type="text" placeholder="Type a name"/>
     
     {
      isPending ? (
        <div>Loading</div>
      ):(
        <div className="cards">
        {filtered.length > 0 ? (filtered.map((user) => (
          <div class="card">
            <div className="profile">
              <img src={user.avatar} alt={`Avatar image of ${user.name}`} />
            </div>
            <div className="body">
              <strong>{user.name}</strong>
            </div>
          </div>
        ))) :
          <h4 className='nomatch'>The match not found...</h4> 
        }
      </div>
      )
     }
     
    </div>
  );
}