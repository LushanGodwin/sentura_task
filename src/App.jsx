import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './component/UserForm'

function App() {

    return (
        <div className="App">
          <h1 className="text-2xl font-bold text-center mt-4 text-green-500">User Management</h1>
          <UserForm />
        </div>
      );
}

export default App
