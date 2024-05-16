"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BackGroundObjects() {
  return (
    <div>
      <div className=" absolute top-0 z-10">
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
          />
        </motion.div>
      </div>
      <div className=" absolute top-0 right-25 z-10">
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
          />
        </motion.div>
      </div>
      <div className=" absolute top-56 left-40 z-0">
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
          />
        </motion.div>
      </div>
      <div className=" absolute top-72 z-0">
        <Image
          src="/ellipse-bleak.svg"
          width={948}
          height={557}
          alt="Ellipse Yellow"
        />
      </div>
    </div>
  );
}
