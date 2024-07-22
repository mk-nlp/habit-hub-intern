import React from "react";
import { useFormik } from "formik";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { daysStore } from "@/app/tasks/daysState";

const validate = (values: { email: string; password: any }) => {
  const errors: {
    email?: string;
    password?: any;
  } = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

export const SigninForm = () => {
  const t = useTranslations();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ChangeLanguage = daysStore((state: any) => state.ChangeLanguage);
  const backendLanguage = daysStore((state: any) => state.backendLanguage);

  const populateLanguage = async () => {
    ChangeLanguage(await backendLanguage());
  };

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
      setError(data.Error);
      setLoading(false);
    }
    if (data && response.status === 302) {
      await populateLanguage();
      window.location.href = "/tasks";
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex-row items-center justify-center"
    >
      <div className="flex-row items-center justify-center">
        <label htmlFor="email" className="flex">
          {t("LoginPage.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder={t("LoginPage.emailPlaceholder")}
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
        <label htmlFor="password">{t("LoginPage.password")}</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder={t("LoginPage.passwordPlaceholder")}
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
      {error && (
        <div className="flex items-center justify-center font-poppins text-pink">
          {error}
        </div>
      )}

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className=" px-12 py-4 font-bold text-2xl shadow-xl bg-white font-poppins rounded-xl mt-4"
        >
          {loading ? t("LoginPage.LogginIn") : t("LoginPage.SignIn")}
        </button>
      </div>
      <Link
        href="/register"
        className="flex items-center justify-center mt-5 underline font-poppins text-purple"
      >
        {t("LoginPage.DontHaveAccount")}
      </Link>
    </form>
  );
};
