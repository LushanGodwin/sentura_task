import React, { useState } from 'react';

const UserForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    uid: initialData.uid || '',
    email: initialData.email || '',
    givenName: initialData.givenName || '',
    middleName: initialData.middleName || '',
    name: initialData.name || '',
    familyName: initialData.familyName || '',
    nickname: initialData.nickname || '',
    phoneNumber: initialData.phoneNumber || '',
    comment: initialData.comment || '',
    picture: initialData.picture || '',
    directory: initialData.directory || '',
    metadata: initialData.metadata || {},
    tags: initialData.tags || [],
    isSuspended: initialData.isSuspended || false,
    isBot: initialData.isBot || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
          const res = await fetch("https://c53887dc9cdc41b8be6f44a501eabf81.weavy.io/api/users", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "Authorization": "Bearer wys_1CGz1105PkGlAkJrfGQH85yHl16pQJ3j9fWX",
 
          },
          body: JSON.stringify(formData),
         });
         const data = await res.json();
        console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="uid"
        placeholder="UID"
        value={formData.uid}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="givenName"
        placeholder="Given Name"
        value={formData.givenName}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="middleName"
        placeholder="Middle Name"
        value={formData.middleName}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="familyName"
        placeholder="Family Name"
        value={formData.familyName}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="nickname"
        placeholder="Nickname"
        value={formData.nickname}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="comment"
        placeholder="Comment"
        value={formData.comment}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="picture"
        placeholder="Picture URL"
        value={formData.picture}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="directory"
        placeholder="Directory"
        value={formData.directory}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="metadata"
        placeholder="Metadata (key=value, comma-separated)"
        value={formData.metadata}
        onChange={(e) =>
          setFormData({ ...formData, metadata: Object.fromEntries(e.target.value.split(',').map(s => s.split('='))) })
        }
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma-separated)"
        value={formData.tags}
        onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',') })}
        className="border p-2 rounded w-full"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isSuspended"
          checked={formData.isSuspended}
          onChange={handleChange}
        />
        <span>Suspended</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isBot"
          checked={formData.isBot}
          onChange={handleChange}
        />
        <span>Bot</span>
      </label>
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
};

export default UserForm;
