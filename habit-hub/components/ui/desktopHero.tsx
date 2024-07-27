import Image from "next/image";
import { useTranslations } from "next-intl";
import ButtonComponent from "../button";

import BackGroundObjects from "@/app/backgroundObjects";
export default function DesktTopHero() {
  const t = useTranslations();

  return (
    <div className="flex">
      <div className="flex flex-col p-20 z-10 mt-20 relative">
        <div className="font-poppins text-8xl text-black">
          Do your tasks <br /> <strong>quicky</strong> and <strong>easy</strong>
        </div>
        <div className="font-poppins font-extralight text-4xl mt-4">
          Your rules your tasks, our support
        </div>
        <div className="mt-20">
          <ButtonComponent
            buttontext={t("HomePage.login")}
            buttonurl="/login"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-end ml-20">
        <Image
          src="/hero-grouped.svg"
          alt="hero"
          width={800}
          height={100}
          className=""
        />
      </div>
      <BackGroundObjects />
    </div>
  );
}
