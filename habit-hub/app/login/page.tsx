"use client";
import MultiOptionSignOn from "@/components/multiOption";
import InputComponent from "@/components/input";
import ButtonComponent from "@/components/button";
import Image from "next/image";
import BackGroundLines from "./backGroundLines";
import BottomBar from "../../components/bottomBar";
import { Input } from "postcss";
import { LoginUser } from "@/utils/login";
import { loginStore } from "./loginState";
import { log } from "console";
import { SigninForm } from "@/components/signInForm";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const setEmail = loginStore((state: any) => state.setEmail);
  const setPassword = loginStore((state: any) => state.setPassword);
  const email = loginStore((state: any) => state.email);
  const password = loginStore((state: any) => state.password);
  const t = useTranslations();
  return (
    <div>
      <div className="grid grid-cols-4 relative">
        <div className=" grid col-start-2 col-end-4 mt-28 justify-center font-poppins font-extrabold text-xl text-nowrap text-purple">
          {t("LoginPage.LoginHeader")}
        </div>
        <div className=" grid col-start-2 col-end-4 mt-5 justify-center font-poppins text-nowrap text-center">
          <span>{t("LoginPage.LoginTextSpan1")}</span>
          <span>{t("LoginPage.LoginTextSpan2")}</span>
        </div>
        <div className="grid col-start-2 col-end-4 mt-5 justify-center z-50">
          <MultiOptionSignOn orientation="down" />
        </div>
        <div className="grid col-start-1 col-end-5 mt-5 p-5 z-10">
          <SigninForm />
        </div>
      </div>
      <BackGroundLines />
      <div className="mt-48">
        <BottomBar />
      </div>
    </div>
  );
}
