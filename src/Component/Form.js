import React from "react";
import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
   let name,value
  const getUserData = (event) =>{
       name =event.target.name;
       value =event.target.value ; 
       console.log({[name]:value});
       console.log({name:value});
       setUser({...user,[name] :value}) 
  } 

  const postData = async (e) => {
    const { name, email, password, message } = user;
    e.preventDefault();
     if(name && email && password && message){

     
    const response = await fetch(
      "https://reactformdata-6a858-default-rtdb.asia-southeast1.firebasedatabase.app/ReactFormData.json",
      {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          message,
        }),
      }
    );
   if(response){
     setUser({
        name: "",
    email: "",
    password: "",
    message: "",
     })
    alert("Data store Successfully") 
   } 
 }
 else {
    alert("All field is equired");
 }
  };

  return (
    <>
      <div className="formContainer">
        <form action="#" className="formdata" method="POST">
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={getUserData}
              placeholder="name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="">Email Id</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={getUserData}
              placeholder="email_id"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="">Password</label>
                                          <input
                                          type="text"
                                          name="password"
                                          value={user.password}
                                          onChange={getUserData}
                                          placeholder="password"
                                          required
                                              />
          </div>
          <div className="field">
            <label htmlFor="">Message</label>
            <input
              type="text"
              name="message"
              value={user.message}
              onChange={getUserData}
              placeholder="message"
              required
            />
          </div>
          <div className="field">
            <button type="submit" onClick={postData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
