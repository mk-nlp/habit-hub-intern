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

export default function LoginPage() {
  const setEmail = loginStore((state) => state.setEmail);
  const setPassword = loginStore((state) => state.setPassword);
  const email = loginStore((state) => state.email);
  const password = loginStore((state) => state.password);

  return (
    <div>
      <div className="grid grid-cols-4 relative">
        <div className=" grid col-start-2 col-end-4 mt-28 justify-center font-poppins font-extrabold text-xl text-nowrap text-purple">
          Log in to HabitHUB
        </div>
        <div className=" grid col-start-2 col-end-4 mt-5 justify-center font-poppins text-nowrap text-center">
          <span>Welcome back! Sign in using your social</span>
          <span>account or email to continue.</span>
        </div>
        <div className="grid col-start-2 col-end-4 mt-5 justify-center">
          <MultiOptionSignOn orientation="down" />
        </div>
        <div className="grid col-start-1 col-end-5 mt-20 p-5 z-10">
          <InputComponent
            placeholder="Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputComponent
            placeholder="Password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="grid col-start-2 col-end-4 mt-16 z-10">
          <ButtonComponent
            buttonText="Login"
            buttonUrl="/login/agreement"
            email={email}
            password={password}
            buttonFunction={LoginUser}
          />
        </div>
      </div>
      <BackGroundLines />
      <div className="mt-48">
        <BottomBar />
      </div>
    </div>
  );
}
