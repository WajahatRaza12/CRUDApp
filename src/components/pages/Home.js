import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1>HomePage</h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user,index)=>(
              <tr>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link class="btn btn-primary custom" to={`users/${user.id}`}>View</Link>
                <Link class="btn btn-outline-primary custom" to={`users/edit/${user.id}`}>Edit</Link>
                <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
              </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};
