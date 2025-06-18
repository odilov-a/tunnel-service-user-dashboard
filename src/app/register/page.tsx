"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.post(
        `${process.env.BACKEND_API_URL}/users/register`,
        {
          username: form.username,
          password: form.password,
        }
      );

      if (res.status === 201 || res.status === 200) {
        setSuccess("Registered successfully! You can now log in.");
        setForm({
          username: "",
          password: "",
        });
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}
        {success && (
          <div className="mb-4 text-green-600 text-sm text-center">
            {success}
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="username">
            Username
          </label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
            autoComplete="username"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>

        <Link
          href={"/login"}
          className="block text-center mt-4 text-blue-600 hover:underline"
        >
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
