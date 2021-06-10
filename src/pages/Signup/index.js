import React from 'react';
import './index.css';

const Signup = () => (
    <main className="main">
      <form className="form">
        <div className="logo"></div>
        <input 
          type="text" 
          className="input" 
          placeholder="First Name" 
        />
        <input 
          type="text" 
          className="input" 
          placeholder="Second Name" 
        />
        <input 
          type="email" 
          className="input first" 
          placeholder="Email" 
        />
        <input 
          type="password" 
          className="input" 
          placeholder="Password" 
        />
        <input 
          type="password" 
          className="input" 
          placeholder="Repeat Password" 
        />
        <button 
          type="submit"
          className="submit"
        >
          Sign Up
        </button>
      </form>
    </main>
)

export default Signup
