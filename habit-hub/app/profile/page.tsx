"use client";
import ProfileButton from "@/components/profileButton";
import BottomBar from "@/components/bottomBar";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { validateSession } from "@/utils/validate-session-client";
import { Button } from "@/components/ui/button";
import { daysStore } from "../tasks/daysState";

export default function ProfilePage() {
  const t = useTranslations();
  const router = useRouter();
  const setCurrentLanguage = daysStore(
    (state: any) => state.setCurrentLanguage
  );
  const ChangeLanguage = daysStore((state: any) => state.ChangeLanguage);
  const currentLanguage = daysStore((state: any) => state.currentLanguage);
  const backendLanguage = daysStore((state: any) => state.backendLanguage);

  console.log(currentLanguage);

  async function changeLanguageRequest(currentLanguage: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ORIGIN}/api/change-language?language=${currentLanguage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
          Host: process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
        },
      }
    );
  }

  useEffect(() => {
    validateSession().then((data) => {
      if (data.success === false) {
        if (window.location.pathname === "/") {
          return;
        }
        router.push("/login");
      }
      if (data.success === true) {
        if (
          window.location.pathname === "/login" ||
          window.location.pathname === "/"
        ) {
          router.push("/tasks");
        }
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 bg-pink/60">
      <div className="grid col-start-2 py-5 col-end-4 items-center justify-items-center font-poppins font-semibold text-normal">
        {t("ProfilePage.Profile")}
      </div>
      <div className="grid col-start-1 mr-5 gap-8 rounded-xl col-end-5 ">
        <ProfileButton
          buttontext={t("ProfilePage.Account")}
          buttonurl="/profile/profile-details"
        />
        <ProfileButton
          buttontext={t("ProfilePage.Notifications")}
          buttonurl="/profile"
        />
        <ProfileButton
          buttontext={t("ProfilePage.Help")}
          buttonurl="/profile"
        />
        <ProfileButton
          buttontext={t("ProfilePage.StorageAndData")}
          buttonurl="/profile"
        />
        <ProfileButton
          buttontext={t("ProfilePage.InviteAFriend")}
          buttonurl="/profile"
        />
        <ProfileButton
          buttontext={t("ProfilePage.Logout")}
          buttonurl="/profile/logout"
        />
      </div>
      <div className="grid col-start-1 col-end-5 justify-center mt-8">
        <Button
          className="bg-white text-black font-poppins p-6 hover:bg-purple hover:text-white"
          onClick={async () => {
            const currentLanguage = await backendLanguage();
            const newLanguage = currentLanguage === "en" ? "tr" : "en";
            changeLanguageRequest(newLanguage);
            ChangeLanguage(backendLanguage());
            router.refresh();
          }}
        >
          {t("ProfilePage.CurrentLanguage")}: {t("ProfilePage.language")} <br />
          {t("ProfilePage.ChangeLanguage")}
        </Button>
      </div>
      <div className="grid col-start-1 mt-52 col-end-5 bg-ash ">
        <BottomBar />
      </div>
    </div>
  );
}
