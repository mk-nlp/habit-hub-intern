import Image from "next/image";
import RootLayout from "./layout";
import ButtonComponent from "@/components/button";
import MultiOptionSignOn from "@/components/multiOption";
import BackGroundObjects from "./backgroundObjects";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations();
  return (
    <RootLayout>
      <div className="grid grid-cols-4 z-20 relative">
        <div className="grid col-start-1 ml-8 mt-28 col-end-3 font-poppins text-6xl leading-12 text-nowrap">
          <span>{t("HomePage.span1")}</span>
          <span>{t("HomePage.span2")}</span>
          <span>{t("HomePage.span3")}</span>
          {t("HomePage.span4")}
        </div>
        <div className=" grid col-start-1 col-end-3 ml-8 text-nowrap font-extralight text-xl">
          {t("HomePage.description")}
        </div>
        <div className=" grid col-start-2 col-end-4 mt-32">
          <ButtonComponent
            buttontext={t("HomePage.login")}
            buttonurl="/login"
          />
        </div>
        <a
          className="grid col-start-2 col-end-4 justify-center mt-3 font-poppins text-xs text-black underline opacity-45"
          href="/register"
        >
          {t("HomePage.register")}
        </a>
        <div className=" grid col-start-1 col-end-5 justify-center mt-8">
          <MultiOptionSignOn orientation="up" />
        </div>
      </div>
      <BackGroundObjects />
    </RootLayout>
  );
}
