"use client";
import InputComponent from "@/components/input";
import { SignupForm } from "@/components/registerForm";
import { useState } from "react";
import BackGroundLines from "../login/backGroundLines";
import { useTranslations } from "next-intl";
export default function RegisterPage() {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="grid grid-cols-4 relative">
        <div className=" grid col-start-2 col-end-4 mt-28 justify-center font-poppins font-extrabold text-xl text-nowrap text-purple">
          {t("RegisterPage.RegisterHeader")}
        </div>
        <div className="grid col-start-1 col-end-5 mt-20 p-5 z-10">
          <SignupForm />
        </div>
        <BackGroundLines />
      </div>
    </div>
  );
}
