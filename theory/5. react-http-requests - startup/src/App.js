
import React, {useEffect, useState} from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';
import Loader from './Components/Loader';

const firebaseUrl = 'https://*.firebaseio.com';


function App() {
  let[showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [errorMessage, setErrorMessage] = useState('');
  let [editMode, setEditMode] = useState(false);
  let [userEdit, setUserEdit ] = useState(null);
  useEffect(()=>{
    fetchUserFromFirebase();
  },[]);


  function addUserHandler(){
    setEditMode(false);
    setShowForm(true);
  }

  function closeForm(){
    setShowForm(false)
  }

  function createUserInFirebase(user){
    console.log("loggin in app.js",user); 

    if(!editMode){
      axios.post(`${firebaseUrl}/user.json`,user).then(
        (response)=>{
          console.log("response : ",response);
          fetchUserFromFirebase();
         
        }
      ).catch((e)=>{
        console.log("Err: ",e);
      })
    }
    else{
      axios.put(`${firebaseUrl}/user/${userEdit.id}.json`,user).
      then((response)=>{
        console.log("Edit Response: ",response);
        fetchUserFromFirebase();
      }).catch((error)=>{
        setErrorMessage(error.message);
      });
    }

    //Common for every one
    setShowForm(false)
    
  }

  function fetchUserFromFirebase(){
    setErrorMessage('');
    setLoading(true);
    axios.get(`${firebaseUrl}/user.json`).then((response)=>{
      console.log("Response: ",response.data);
      let userData=[];
      for(let key in response.data){
          userData.push({...response.data[key], id:key});
      }
      setUsers(userData);
      setLoading(false);
      
    }).catch((error)=>{
      setLoading(false);
      setErrorMessage(error.message)

    });
  }

  function onEditUserFn(user){
    console.log("Edit user from app.js ",user);
    setEditMode(true);
    setUserEdit(user);
    setShowForm(true);

  }

  function onDeleteUser(user){
    let confirmMessage = window.confirm("Are you sure want to delete the record "+user.firstName+" "+user.lastName)
    console.log("Deletet user : ",user);
    if(confirmMessage){
      axios.delete(`${firebaseUrl}/user/${user.id}.json`).then((response)=>{
        console.log("Delete Response: ",response);
        fetchUserFromFirebase();
      }).catch((error)=>{
        console.log("Delete Error", error.message);
        setErrorMessage(error.message);
      })
    }
  }
  return (
      <div>
        <div className='page-header'>
          <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
          <button className='btn btn-normal' onClick={fetchUserFromFirebase}>Get Users</button>
        </div>
        {/* { users.length ? <UserDetails users = {users}></UserDetails>  : <h4>Unable to get user</h4> } */}
        { !loading  && !errorMessage && <UserDetails users = {users} 
        onEditUserAttribute = {onEditUserFn}
        onDeleteUserAttribute = {onDeleteUser}
        >
          </UserDetails>}
        { errorMessage && <h3 style={{textAlign:'center'}}>{errorMessage}</h3>}
        { loading  && <Loader/>}
        {showForm && <UserForm closeForm={closeForm} createUserAttribute = {createUserInFirebase} editMode={editMode}
        user = {userEdit}></UserForm>}
      </div>
  );
}

export default App;
