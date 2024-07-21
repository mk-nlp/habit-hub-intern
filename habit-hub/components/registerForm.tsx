import React from "react";
import { useFormik } from "formik";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useState } from "react";

const validate = (values: {
  name: string;
  email: string;
  password: any;
  repeatPassword: any;
}) => {
  const errors: {
    name?: string;
    email?: string;
    password?: any;
    repeatPassword?: any;
  } = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = "Required";
  } else if (values.repeatPassword !== values.password) {
    errors.repeatPassword = "Passwords must match";
  }

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  } else if (values.name.length > 50) {
    errors.name = "Name must be less than 50 characters";
  }
  return errors;
};

export const SignupForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const login = async (email: string, password: string) => {
    setLoading(true);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.Error) {
      setLoading(false);
      setError(data.Error);
    }
    if (data && response.status === 302) {
      window.location.href = "/tasks";
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (data.success) {
      await login(email, password);
    } else {
      setError("User already exists or something went wrong");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: (values) => {
      register(values.name, values.email, values.password);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex-row items-center justify-center"
    >
      <div className="flex-row items-center justify-center">
        <label htmlFor="name" className="flex">
          User name
        </label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Enter your user name"
          className="flex w-full h-12 border-gray-200 border-2 border-b-0 rounded-xs p-4"
        />
        <Separator
          orientation="horizontal"
          className=" w-full h-0.5 bg-black opacity-15"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="font-poppins text-pink">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="flex-row items-center justify-center">
        <label htmlFor="email" className="flex">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email"
          className="flex w-full h-12 border-gray-200 border-2 border-b-0 rounded-xs p-4"
        />
        <Separator
          orientation="horizontal"
          className=" w-full h-0.5 bg-black opacity-15"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="font-poppins text-pink">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="flex-row items-center justify-center">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Enter your password"
          className="flex w-full h-12 border-gray-200 border-2 border-b-0 rounded-xs p-4"
        />
        <Separator
          orientation="horizontal"
          className=" w-full h-0.5 bg-black opacity-15"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="font-poppins text-pink">{formik.errors.password}</div>
        ) : null}
      </div>
      <div className="flex-row items-center justify-center">
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
          onBlur={formik.handleBlur}
          placeholder="Repeat your password"
          className="flex w-full h-12 border-gray-200 border-2 border-b-0 rounded-xs p-4"
        />
        <Separator
          orientation="horizontal"
          className=" w-full h-0.5 bg-black opacity-15"
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className="font-poppins text-pink">
            {formik.errors.repeatPassword}
          </div>
        ) : null}
      </div>
      {error && (
        <div className=" flex items-center justify-center font-poppins text-pink">
          {error}
        </div>
      )}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className=" px-12 py-4 font-bold text-2xl shadow-xl bg-white font-poppins rounded-xl mt-4"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </div>
      <Link
        href="/login"
        className="flex items-center justify-center mt-5 underline font-poppins text-purple"
      >
        Already have an account? Login here
      </Link>
    </form>
  );
};
