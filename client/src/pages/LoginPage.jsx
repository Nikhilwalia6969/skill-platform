import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("BUTTON CLICKED");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        form,
      );

      localStorage.setItem("token", res.data.token);
      setMessage("Login Succesful");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Login</h2>

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
        type="button"
        onClick={handleSubmit}
        className="bg-cyan-500 px-4 py-2 text-black"
      >
        Login
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
