"use client";
import ProfileButton from "@/components/profileButton";
import BottomBar from "@/components/bottomBar";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { validateSession } from "@/utils/validate-session-client";

export default function ProfilePage() {
  const router = useRouter();
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
        Profile
      </div>
      <div className="grid col-start-1 mr-5 gap-8 rounded-xl col-end-5 ">
        <ProfileButton buttontext="Account" buttonurl="/tasks" />
        <ProfileButton buttontext="Notifications" buttonurl="/profile" />
        <ProfileButton buttontext="Help" buttonurl="/profile" />
        <ProfileButton buttontext="Storage and data" buttonurl="/profile" />
        <ProfileButton buttontext="Invite a friend" buttonurl="/profile" />
        <ProfileButton buttontext="Logout" buttonurl="/profile/logout" />
      </div>
      <div className="grid col-start-1 mt-52 col-end-5 bg-ash ">
        <BottomBar />
      </div>
    </div>
  );
}
