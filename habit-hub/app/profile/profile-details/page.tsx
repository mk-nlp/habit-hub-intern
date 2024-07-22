import { cookies } from "next/headers";
import ButtonComponent from "@/components/button";

async function fetchProfileDetails(cookie: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN}/api/profile-details`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
        Cookie: `auth_session=${cookie}`,
        Host: process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
      },
    }
  );

  const data = await response.json();
  return data;
}

export default async function ProfileDetailsPage() {
  const cookieStore = cookies();
  const data = await fetchProfileDetails(
    cookieStore.get("auth_session")?.value ?? ""
  );
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="font-poppins font-extrabold text-xl text-nowrap mt-5 text-purple">
          Account
        </h1>
      </div>
      <div className="flex-row items-center justify-center mt-5">
        <h1 className="flex items-center justify-center font-poppins font-bold text-xl text-nowrap mt-5 text-purple">
          Username: {data.username}
        </h1>
        <h1 className="flex items-center justify-center font-poppins font-bold text-xl text-nowrap mt-5 text-purple">
          Email: {data.email}
        </h1>
        <div className="flex items-center justify-center py-20">
          <ButtonComponent buttontext="Logout" buttonurl="/profile/logout" />
        </div>
      </div>
    </div>
  );
}
