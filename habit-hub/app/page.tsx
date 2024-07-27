import Image from "next/image";
import RootLayout from "./layout";
import ButtonComponent from "@/components/button";
import MultiOptionSignOn from "@/components/multiOption";
import BackGroundObjects from "./backgroundObjects";
import { useTranslations } from "next-intl";
import DesktopTopBar from "@/components/desktopTopbar";
import DesktTopHero from "@/components/ui/desktopHero";
import HeroActions from "@/components/heroActions";
export default function Home() {
  const t = useTranslations();
  return (
    <RootLayout>
      <div className="grid grid-cols-4 z-20 relative md:grid-cols-2">
        <div className="hidden md:block md:col-span-3">
          <DesktopTopBar />
        </div>
        <div className="hidden md:block md:col-span-3">
          <DesktTopHero />
        </div>
        <div className="hidden md:block md:col-span-3">
          <HeroActions />
        </div>
        <div className="grid col-start-1 ml-8 mt-28 col-end-3 font-poppins text-6xl leading-12 text-nowrap md:hidden">
          <span>{t("HomePage.span1")}</span>
          <span>{t("HomePage.span2")}</span>
          <span>{t("HomePage.span3")}</span>
          <span>{t("HomePage.span4")}</span>
        </div>
        <div className=" grid col-start-1 col-end-3 ml-8 text-nowrap font-extralight text-xl md:ml-32 md:mt-2 md:hidden">
          {t("HomePage.description")}
        </div>
        <div className=" grid col-start-2 col-end-4 mt-32 md:col-start-1 md:col-end-1 md:w-52 md:ml-32 md:hidden">
          <ButtonComponent
            buttontext={t("HomePage.login")}
            buttonurl="/login"
          />
        </div>
        <a
          className="grid col-start-2 col-end-4 justify-center mt-3 font-poppins text-xs text-black underline opacity-45 md:hidden"
          href="/register"
        >
          {t("HomePage.register")}
        </a>
        <div className=" grid col-start-1 col-end-5 justify-center mt-8 md:hidden">
          <MultiOptionSignOn orientation="up" />
        </div>
      </div>
      <div className="md:hidden">
        <BackGroundObjects />
      </div>
    </RootLayout>
  );
}
