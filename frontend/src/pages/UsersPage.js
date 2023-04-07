import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserChart from '../components/UserChart';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // fetch users from API
    axios.get('/users').then((response) => {
      setUsers(response.data);
    });

    // fetch locations from API
    axios.get('/locations').then((response) => {
      setLocations(response.data);
    });
  }, []);

  const addUser = async (user) => {
    try {
      await axios.post('/users', user);
      setUsers([...users, user]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (user) => {
    try {
      await axios.put(`/users/${user._id}`, user);
      const updatedUsers = users.map((u) => (u._id === user._id ? user : u));
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
    setEditingUser(null);
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/users/${userId}`);
      const filteredUsers = users.filter((u) => u._id !== userId);
      setUsers(filteredUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm
        locations={locations}
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.contactNumber}</td>
              <td>{user.location ? user.location.name : ''}</td>
              <td>
                <button onClick={() => editUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserChart users={users} />
    </div>
  );
};

export default UsersPage;
