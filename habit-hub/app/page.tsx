import Image from "next/image";
import RootLayout from "./layout";
import ButtonComponent from "@/components/button";
import MultiOptionSignOn from "@/components/multiOption";
import BackGroundObjects from "./backgroundObjects";
export default function Home() {
  return (
    <RootLayout>
      <div className="grid grid-cols-4 z-20 relative">
        <div className="grid col-start-1 ml-8 mt-28 col-end-3 font-poppins text-6xl leading-12 text-nowrap">
          <span>Do your</span>
          <span>tasks</span>
          <span>quickly</span>and easy
        </div>
        <div className=" grid col-start-1 col-end-3 ml-8 text-nowrap font-extralight text-xl">
          Your tasks, your rules, our support.
        </div>
        <div className=" grid col-start-2 col-end-4 mt-32">
          <ButtonComponent buttontext="Login" buttonurl="/login" />
        </div>
        <a
          className="grid col-start-2 col-end-4 justify-center mt-3 font-poppins text-xs text-black underline opacity-45"
          href="/register"
        >
          Create an account
        </a>
        <div className=" grid col-start-1 col-end-5 justify-center mt-8">
          <MultiOptionSignOn orientation="up" />
        </div>
      </div>
      <BackGroundObjects />
    </RootLayout>
  );
}
