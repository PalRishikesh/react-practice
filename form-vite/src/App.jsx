
import { useState } from 'react';
function App() {
  const [contact, setContact] = useState({
    fname:'',
    email:'',
    password:'',
    address:'',
    color:'',
    city:'',
    zip:'',
    agree:false
  });

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;
    if(event.target.type === 'checkbox'){
      value = event.target.checked;
    }
    setContact( {...contact, [name]: value})
  }

  return (
    <div className="p-8">
     <form>

      <div className="my-2">
        <label htmlFor="fname" className="mx-4">
          Full Name
        </label>
        <input type="text"
        value={contact.fname}
        name="fname"
        id="fname"
        placeholder="Enter Full Name"
        required
        className="border border-gray-400 rounded p-1"
        onChange={handleChange}
        />
      </div>

      <div className="my-2">
        <label htmlFor="email" className="mx-4">
          Email
        </label>
        <input type="email"
        value={contact.email}
        name="email"
        id="email"
        placeholder="Enter Email"
        required
        className="border border-gray-400 rounded p-1"
        onChange={handleChange}

        />
      </div>

      <div className="my-2">
        <label htmlFor="password" className="mx-4">
        Password
        </label>
        <input type="password"
        name="password"
        value={contact.password}
        id="password"
        placeholder="Enter password"
        required
        className="border border-gray-400 rounded p-1"
        onChange={handleChange}

        />
      </div>


      <div className="my-2">
        <label htmlFor="color" className="mx-4">
        Your favourite Color
        </label>
        <input type="color"
        name="color"
        value={contact.color}
        id="color"
        className="border border-gray-400 rounded p-1"
        onChange={handleChange}

        />
      </div>
      
      <div className="my-2">
        <label htmlFor="address" className="mx-4">
        Address
        </label>
        <textarea type="address"
        name="address"
        id="address"
        value={contact.address}
        placeholder="Where can we find you?"
        required
        className="border border-gray-400 rounded p-1"
        onChange={handleChange}

        />
      </div>

      <div className="my-2">
        <label htmlFor="city" className="mx-4">
        City
        </label>
        <input type="city"
        name="city"
        value={contact.city}
        id="city"
        placeholder="Enter city"
        required
        className="border border-gray-400 rounded p-1"
        onChange={handleChange}

        />
      </div>

      <div className="my-2">
        <label htmlFor="state" className="mx-4">State</label>
        <select name="state" id="state" required  className="border border-gray-400 rounded p-1"
        onChange={handleChange}
        value={contact.state}>
          <option value="">Choose..</option>
          <option value="solid">Solid</option>
          <option value="liquid" >Liquid</option>
          <option value="gas">Gas</option>
        </select>
      </div>

      <div className="my-2">
        <label htmlFor="zip" className="mx-4">
        Pin/Zip
        </label>
        <input type="number"
        name="zip"
        id="zip"
        placeholder="Enter zip/ Pin code"
        required
        checked={contact.agree}
        className="border border-gray-400 rounded p-1"
        onChange={handleChange}

        />
      </div>


      <div className="my-2">
      
        <input type="checkbox"
        name="agree"
        id="agree"
        required
        className="mx-4 border border-gray-400 rounded p-1"
        onChange={handleChange}

        />
        <label htmlFor="agree" >
          Say's Agree
        </label>
      </div>
     </form>
     <div>
      {contact.fname}
     </div>
    </div>
  )
}

export default App
