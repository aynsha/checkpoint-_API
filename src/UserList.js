import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './userList.css'

function UserList() {
const [listOfUser, setListOfUser]= useState([]);
const [error, setError]= useState(null);
// Fetch data from the API
useEffect(()=>{
  function fetchData(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=> {setListOfUser(response.data);})
    .catch(err => setError(err));
  };
fetchData();
}, []);

  return (
      <div>
      <table>
              <tr>
              <th>Nom et Prénom </th>
              <th>Email</th>
              <th>Adresse</th>
              <th>Phone</th>
            </tr>
        {listOfUser.map(user => (
            <tr>
              <td>{user.name}  {user.username} </td>
              <td>{user.email} </td>
              <td>{user.address.street} {user.address.suite} {user.address.city} </td>
              <td>{user.phone} </td>
              </tr>
        ))}
        </table>
    </div>
  )
}

export default UserList
