"use client";

import { Button } from "./ui/button";
import Router from "next/router";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { validateSession } from "@/utils/validate-session-client";
import { loginStore } from "@/app/login/loginState";
import { LoginUser } from "@/utils/login";
import { LoaderCircleIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  buttontext: string;
  buttonurl: string;
  email?: string;
  password?: string;
  buttonFunction?: (email: string, password: string) => void;
}

export default function ButtonComponent({
  buttontext,
  buttonurl,
  email,
  password,
  buttonFunction,
}: ButtonProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    validateSession().then((data) => {
      if (data.success === false) {
        if (window.location.pathname === "/") {
          return;
        }
        router.push("/login");
      }
      if (data.success === true) {
        if (
          window.location.pathname === "/login" ||
          window.location.pathname === "/"
        ) {
          router.push("/tasks");
        }
      }
    });
  }, [router]);

  return buttonFunction ? (
    <Button
      className=" bg-white font-poppins font-bold rounded-xl text-2xl text-black  shadow-xl p-7 hover:bg-purple hover:text-white"
      onClick={async () => {
        if (buttonFunction) {
          setLoading(true);
          buttonFunction(email ?? "", password ?? "");
        }
        router.push(buttonurl);
      }}
    >
      {loading ? (
        <div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <LoaderCircleIcon className="text-white" size={40} />
          </motion.div>
        </div>
      ) : (
        buttontext
      )}
    </Button>
  ) : (
    <Button
      className=" bg-white font-poppins font-bold rounded-xl text-2xl text-black  shadow-xl p-7 hover:bg-purple hover:text-white"
      onClick={() => {
        router.push(buttonurl);
      }}
    >
      {buttontext}
    </Button>
  );
}
