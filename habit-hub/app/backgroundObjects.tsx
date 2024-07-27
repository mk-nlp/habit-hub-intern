"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BackGroundObjects() {
  return (
    <div className="md:top-0 md:z-0">
      <div className=" absolute top-0 z-10  md:top-20 md:left-80 md:h-2 md:w-[600px]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-50, 0, -50] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/ellipse-pink.svg"
            width={436}
            height={378}
            alt="Ellipse Pink"
            className="md:hidden"
          />
          <Image
            src="/desktop-bg-1.svg"
            width={900}
            height={900}
            alt="Ellipse Pink"
            className="md:block hidden "
          />
        </motion.div>
      </div>
      <div className=" absolute top-0 right-25 z-10 md:top-0 md:left-0 md:w-[600px] md:h-[2px]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-50, 0, -50] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/ellipse-blue.svg"
            width={458}
            height={617}
            alt="Ellipse Blue"
            className="md:hidden"
          />
          <Image
            src="/desktop-bg-2.svg"
            width={600}
            height={300}
            alt="Ellipse Blue"
            className="md:block hidden"
          />
        </motion.div>
      </div>
      <div className=" absolute top-56 left-40 z-0 md:fixed md:top-12 md:left-80 md:w-[400px]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/ellipse-purple.svg"
            width={948}
            height={557}
            alt="Ellipse Yellow"
            className="md:hidden"
          />
        </motion.div>
      </div>
      <div className=" absolute top-72 z-0 md:hidden">
        <Image
          src="/ellipse-bleak.svg"
          width={948}
          height={557}
          alt="Ellipse Yellow"
          className=""
        />
      </div>
    </div>
  );
}
