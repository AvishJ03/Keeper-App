import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Login(props) {
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, logEmail, logPass);
      console.log(user);
      props.logged();
    } catch (error) {
      console.log(error.message);
    }
  };

  function logEmailChange(event) {
    setLogEmail(event.target.value);
  }
  function logPassChange(event) {
    setLogPass(event.target.value);
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          value={logEmail}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={logEmailChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          value={logPass}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={logPassChange}
        />
      </div>
      <button onClick={login} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
