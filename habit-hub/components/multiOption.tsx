"use client";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
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
        <div className="flex flex-row items-center gap-5 mt-3 py-5">
          <motion.div
            initial={{ width: 50, height: 50 }}
            whileHover={{ scale: 1.5 }}
          >
            <Link href="/login/github">
              <Image
                src="/github-mark.svg"
                width={50}
                height={50}
                alt="Google Sign On"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-5 mt-3 py-5">
        <motion.div
          initial={{ width: 50, height: 50 }}
          whileHover={{ scale: 1.5 }}
        >
          <Link href="/login/github" className=" z-50">
            <Image
              src="/github-mark.svg"
              width={50}
              height={50}
              alt="Github Sign On"
            />
          </Link>
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
