"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios"; // Import axios for making API requests

const Page = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "", // You might want to handle password differently, e.g., not showing it initially
  });
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token"); // Adjusted to your token storage key

      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/api/auth/me", {
            headers: {
              "x-auth-token": token, // Include the token in the header
            },
          });

          setProfile({
            name: response.data.name,
            email: response.data.email,
            password: "", // Do not set the password from the response
          });
        } catch (err) {
          console.error(err);
          setError("Failed to fetch profile data.");
        }
      } else {
        setError("No token found.");
      }
      setLoading(false); // Set loading to false after data fetching
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    localStorage.setItem("profile", JSON.stringify(profile)); // Save updated profile to localStorage
    console.log("Profile updated:", profile); // Log or handle updated profile as needed
  };

  if (loading) {
    return <p>Loading...</p>; // Display loading state
  }

  if (error) {
    return <p>{error}</p>; // Display error message if any
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-2xl font-bold mb-6">Profile Information</p>
        <div className="h-40 w-40 bg-gray-500 rounded-full mb-10"></div>
        <form className="flex flex-col w-1/3 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            className="input py-3 px-4 rounded-lg bg-gray-800 text-gray-200"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="input py-3 px-4 rounded-lg bg-gray-800 text-gray-200"
            placeholder="Email"
          />
          <input
            type="password" // Keep this as password type for security
            name="password"
            value={profile.password}
            onChange={handleInputChange}
            className="input py-3 px-4 rounded-lg bg-gray-800 text-gray-200"
            placeholder="Password"
          />
          <button 
            type="submit" // Ensure the button is of type "submit"
            className="py-3 px-4 rounded-lg bg-gradient-to-r from-[#AAFFA9] to-emerald-500 text-gray-900 font-bold"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
