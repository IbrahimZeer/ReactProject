/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { object, string } from "yup";
import style from "./Signup.module.css";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });

  const [error, setError] = useState([]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleImageChanges = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };

  const validationData = async (e) => {
    const RegSchema = object({
      userName: string().min(5).max(20).required(),
      email: string().email().required(),
      password: string().min(8).required(),
      image: string(),
    });

    try {
      await RegSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      setError(error.errors);
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = await validationData();
    if (!validate) return;
    const formData = new FormData();
    formData.append("userName", user.userName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("image", user.image);
    const { data } = axios.post(
      `${import.meta.env.VITE_API_URL}/auth/signup`,
      formData
    );
    setUser({
      userName: "",
      email: "",
      password: "",
      image: "",
    });
  };
  return (
    <>
      <h2>Register Page</h2>
      {error.length > 0
        ? error.map((err) => (
            <span className={style.errMessages} key={err.id}>
              {err}
            </span>
          ))
        : ""}

      <form className={style.formFormat} onSubmit={handleSubmit}>
        <label htmlFor="">user name</label>
        <input
          type="text"
          value={user.userName}
          name="userName"
          onChange={handleChanges}
        />

        <label htmlFor="">email</label>
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleChanges}
        />

        <label htmlFor="">password</label>
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleChanges}
        />

        <label htmlFor="">image</label>
        <input type="file" name="image" onChange={handleImageChanges} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
