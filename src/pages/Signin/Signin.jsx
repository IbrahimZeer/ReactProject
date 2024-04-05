/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { object, string } from "yup";
import style from "./Signin.module.css";
export default function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);

  const inputHandling = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validation = async () => {
    const RegSchema = object({
      email: string().email().required(),
      password: string().min(8).required(),
    });

    try {
      await RegSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      console.log(error);
      setError(error.errors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validation()) {
      const { data } = axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        { user }
      );
    }
  };

  return (
    <>
      <h2>Signin page</h2>
      <p>Welcome to our website</p>
      {error.length > 0
        ? error.map((err) => (
            <span className={style.errMessages} key={err.id}>
              {err}
            </span>
          ))
        : ""}

      <form className={style.formFormat} onSubmit={handleSubmit}>
        <label htmlFor="">email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={inputHandling}
        />

        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={inputHandling}
        />

        <button type="submit">sign in</button>
      </form>
    </>
  );
}
