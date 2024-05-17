"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BottomBar from "@/app/login/bottomBar";
import { ArrowLeftSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white relative z-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <Image
        src="/sademo.webp"
        alt="Loading"
        width={300}
        height={300}
        className=" relative z-10"
      />
      <motion.div />
      <div className="font-poppins font-bold text-2xl mt-5 text-center text-purple">
        <span className=" mt-5 relative">There is nothing here...</span>
        <br />
        <span className="">Just loneliness...</span>
      </div>
      <Image
        src="/line-2.svg"
        alt="Background lines"
        width={1900}
        height={300}
        className="absolute bottom-40 right-0 z-0"
      />
      <div className="absolute top-10 left-0 z-0">
        <ArrowLeftSquare
          size={50}
          className=" text-purple"
          onClick={() => router.push("/login")}
        />
      </div>
    </div>
  );
}
