import React, { useState} from "react";
import { connect } from "react-redux";
import { getLogin } from "../store/actions";

const Login=(props) =>{
console.log(props)
    const [form, setForm] = useState({ username: "", password: '' })
    
    const handleChange = e => {
      e.preventDefault();
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.getLogin(form,props);
        
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
const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getLogin }
)(Login);

