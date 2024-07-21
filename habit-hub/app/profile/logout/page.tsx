"use client";
import { useEffect } from "react";

export default function Logout() {
  async function logOutUser() {
    await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
        Host: process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
      },
      body: JSON.stringify({}),
    });
  }

  useEffect(() => {
    logOutUser().then(() => {
      window.location.href = "/login";
    });
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}
