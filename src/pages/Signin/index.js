import React from 'react';
import './index.css';


const Signin = () => (
    <main className="main">
      <form className="form">
        <div className="logo"></div>
        <input type="email" className="input first" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <button type="submit" className="submit">
          Sign In
        </button>
      </form>
    </main>
)

export default Signin
