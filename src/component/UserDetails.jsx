import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import { createUser, getUsers, updateUser, deleteUser } from './api';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleFormSubmit = async (user) => {
    if (currentUser) {
      await updateUser(currentUser.id, user);
    } else {
      await createUser(user);
    }
    const updatedUsers = await getUsers();
    setUsers(updatedUsers);
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    const updatedUsers = await getUsers();
    setUsers(updatedUsers);
  };

  return (
    <div className="p-4">
      <UserForm onSubmit={handleFormSubmit} initialData={currentUser} />
      <ul className="mt-6 space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{user.name}</p>
              <p>{user.email}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export defa
