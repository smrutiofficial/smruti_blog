"use client";

import { useState } from "react";
import axios from "axios";
// import { useRouter } from 'next/router';

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  // const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Simple validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password }
      );
      localStorage.setItem("token", res.data.token);
      // router.push('/');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">Register</h1>
      <form className="space-y-4" onSubmit={handleRegister}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="input"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="btn">
          Register
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
