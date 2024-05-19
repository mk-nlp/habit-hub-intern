import ButtonComponent from "@/components/button";
import Image from "next/image";

import BottomBar from "@/components/bottomBar";

export default function AgreementPage() {
  return (
    <div>
      <div className="grid grid-cols-4 relative">
        <div className="grid col-start-1 col-end-3 mt-28 ml-8 font-poppins font-black text-2xl text-nowrap">
          Let's make a contract
        </div>
        <div className="grid col-start-1 col-end-3 mt-14 ml-8 font-poppins font-black text-md text-nowrap">
          I will
        </div>
        <ul className="grid col-start-1 col-end-3 mt-3 ml-12 font-poppins gap-2 text-xl text-nowrap relative z-10">
          <li> • ☀️ Plan tasks.</li>
          <li> • 🎯 Set goals.</li>
          <li> • 🚶‍♂️ Take breaks.</li>
          <li> • 💪 Move and refresh.</li>
          <li> • 📝 Prioritize.</li>
          <li> • 🔍 Break tasks down.</li>
          <li> • 🚫 No multitasking.</li>
          <li> • 📵 Minimize distractions.</li>
          <li> • ⏰ Limit social media.</li>
        </ul>
        <div className="grid col-start-2 col-end-4 mt-16 z-10">
          <ButtonComponent buttonText="I AGREE" buttonUrl="/tasks" />
        </div>
      </div>
      <Image
        src="/line-2.svg"
        width={1920}
        height={1080}
        alt="Line 2"
        className="absolute z-0 top-0 right-0"
      />
      <BottomBar />
    </div>
  );
}
