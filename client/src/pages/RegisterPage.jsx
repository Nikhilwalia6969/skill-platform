import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth-context";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        form,
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occured");
    }
  };
  return (
    <div className="p-10">
      <h2 className="text-2x1 mb-4">Register</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="bloc mb-2 p-2 bg-gray-800"
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="block mb-2 p-2 bg-gray-800"
      />

      <input
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="block mb-2 p-2 bg-gray-800"
      />

      <button
        onClick={handleSubmit}
        className="bg-cyan-500 px-4 py-2 text-black"
      >
        Create Account
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
