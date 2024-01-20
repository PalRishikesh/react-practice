import React, { useRef } from 'react';
import './UserForm.css';

function UserForm(props){
    let fNameRef = useRef();
    let lNameRef = useRef();
    let emailRef = useRef();
    let pswdRef = useRef();
    let countryRef = useRef();
    let cityRef = useRef()
    let dateRef = useRef();
    let genderRef = useRef();

    const onCreateUser = (event)=>{
        event.preventDefault();
        let user = {
            firstName:fNameRef.current.value,
            lastName : lNameRef.current.value,
            email    : emailRef.current.value,
            password : pswdRef.current.value,
            country   : countryRef.current.value,
            city    : cityRef.current.value,
            dob     : dateRef.current.value,
            gender  : genderRef.current.value

        }
        console.log(user);
        props.createUserAttribute(user);
    }
    return <>
            <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="close" onClick={props.closeForm}>&times;</div>
                        <h3>Create new user</h3>
                        <div class="user-form">
                            <form onSubmit={onCreateUser}>
                                <div>
                                    <input type="text" placeholder="First name" ref={fNameRef}
                                     defaultValue={props.editMode ? props.user.firstName:''}/>
                                    <input type="text" placeholder="Last name"  ref={lNameRef}
                                     defaultValue={props.editMode ? props.user.lastName:''}/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" ref={emailRef}
                                     defaultValue={props.editMode ? props.user.email:''} />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" ref={pswdRef} />
                                    <input type="password" placeholder="Confirm Password" />
                                </div>
                                <div>
                                    <select name="country" ref={countryRef}  defaultValue={props.editMode ? props.user.country:''} >
                                        <option value="India" selected>India</option>
                                        <option value="Germany">Germany</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <select name="city" ref={cityRef} defaultValue={props.editMode ? props.user.city:''}>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Berlin">Berlin</option>
                                        <option value="New York">New York</option>
                                        <option value="London">London</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" placeholder="Date of Birth" ref={dateRef}  defaultValue={props.editMode ? props.user.dob:''}/>
                                    <select name="gender" ref={genderRef} defaultValue={props.editMode ? props.user.gender:''}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Unknown">Unknown</option>
                                    </select>
                                </div>
                                <button className='add-user-button'> { props.editMode ? 'Update':'Create' }  User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
}

export default UserForm;