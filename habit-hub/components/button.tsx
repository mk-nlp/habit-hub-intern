"use client";

import { Button } from "./ui/button";
import Router from "next/router";
import { useRouter } from "next/navigation";

interface ButtonProps {
  buttonText: string;
  buttonUrl: string;
}

export default function ButtonComponent({
  buttonText,
  buttonUrl,
}: ButtonProps) {
  const router = useRouter();

  return (
    <Button
      className=" bg-white font-poppins font-bold rounded-xl text-2xl text-black  shadow-xl p-7 hover:bg-purple hover:text-white"
      onClick={() => router.push(buttonUrl)}
    >
      {buttonText}
    </Button>
  );
}
