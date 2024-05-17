"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <Image src="/loading.svg" alt="Loading" width={300} height={300} />
      <motion.div />
      <div className="font-poppins font-bold text-2xl mt-5">Loading...</div>
    </div>
  );
}
