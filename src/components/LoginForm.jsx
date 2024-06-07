import React, { useState } from "react";

const submission_data = { username: "user", password: "password" };
const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      submission_data.username === formData.username &&
      submission_data.password === formData.password
    ) {
      setIsLoggedIn(true);
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  //   console.log(formData);
  return (
    <>
      <div>
        <h2>Login Page</h2>
        {!isLoggedIn ? (
          <>
            {message}
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                required
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="username"
              />

              <br />
              <label htmlFor="password">Password:</label>
              <input
                required
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="password"
              />

              <br />
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </>
  );
};

export default LoginForm;
