import React, { useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

function Login(props) {
console.log(props)
    const [form, setForm] = useState({ username: "", password: '' })
    
    const handleChange = e => {
      e.preventDefault();
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login',form)
            .then(res => {
              
                localStorage.setItem("token", res.data.payload);
                props.history.push("/data");
            })
            .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className="LoginContainer">
      <form onSubmit={handleSubmit} className="loginForm">
       <div className="info-input">
          <label>User Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
           
            value={form.username}
                  />
                  </div>
        <div className="info-input">
          <label >Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            
            value={form.password}
          />
       </div>
     <button type="submit">Sign in</button>
        
      </form>
    </div>
  );
  
}

export default Login;
