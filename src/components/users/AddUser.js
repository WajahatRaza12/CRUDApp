import axios from "axios";
import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';

export default function AddUser() {
    let navigate = useNavigate();
    const [user,setUser] = useState({
        name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
    });

    const {name,username,email,phone,website} = user;
    const onInputChange = e=>{
        setUser({...user,[e.target.name] : e.target.value})
        console.log(setUser)
    };

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post('http://localhost:3003/users',user);
        navigate('/')
    };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Add A User</h2>
       <form onSubmit={e=>onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Phone Number"
              name="phone"
             value={phone }
             onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
    </div>
    </div>
  );
}
