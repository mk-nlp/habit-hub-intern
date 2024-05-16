"use client";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { motion } from "framer-motion";
interface MultiOptionSignOnProps {
  orientation: "up" | "down";
}

export default function MultiOptionSignOn({
  orientation,
}: MultiOptionSignOnProps) {
  if (orientation === "up") {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-5">
          <Separator
            orientation="horizontal"
            className="w-28 h-0.5 bg-black opacity-15"
          />
          <div className=" font-poppins font-black opacity-65">OR</div>
          <Separator
            orientation="horizontal"
            className="w-28 h-0.5 bg-black opacity-15"
          />
        </div>
        <div className="flex flex-row items-center gap-5 mt-3">
          <motion.div
            initial={{ width: 50, height: 50 }}
            whileHover={{ scale: 1.5 }}
          >
            <Image
              src="/fb-signon.svg"
              width={50}
              height={50}
              alt="Google Sign On"
            />
          </motion.div>
          <motion.div
            initial={{ width: 50, height: 50 }}
            whileHover={{ scale: 1.5 }}
          >
            <Image
              src="/googl-signon.svg"
              width={50}
              height={50}
              alt="Facebook Sign On"
            />
          </motion.div>
          <motion.div
            initial={{ width: 50, height: 50 }}
            whileHover={{ scale: 1.5 }}
          >
            <Image
              src="/apple-signon.svg"
              width={50}
              height={50}
              alt="Apple Sign On"
            />
          </motion.div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-5 mt-3">
        <motion.div
          initial={{ width: 50, height: 50 }}
          whileHover={{ scale: 1.5 }}
        >
          <Image
            src="/fb-signon.svg"
            width={50}
            height={50}
            alt="Google Sign On"
          />
        </motion.div>
        <motion.div
          initial={{ width: 50, height: 50 }}
          whileHover={{ scale: 1.5 }}
        >
          <Image
            src="/googl-signon.svg"
            width={50}
            height={50}
            alt="Facebook Sign On"
          />
        </motion.div>
        <motion.div
          initial={{ width: 50, height: 50 }}
          whileHover={{ scale: 1.5 }}
        >
          <Image
            src="/apple-signon.svg"
            width={50}
            height={50}
            alt="Apple Sign On"
          />
        </motion.div>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <Separator
          orientation="horizontal"
          className="w-28 h-0.5 bg-black opacity-15"
        />
        <div className=" font-poppins font-black opacity-65">OR</div>
        <Separator
          orientation="horizontal"
          className="w-28 h-0.5 bg-black opacity-15"
        />
      </div>
    </div>
  );
}
