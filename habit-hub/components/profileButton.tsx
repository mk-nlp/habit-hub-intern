"use client";
import { Button } from "./ui/button";
import { ChevronRight, Ghost } from "lucide-react";
import Link from "next/link";

interface ProfileButtonProps {
  buttontext: string;
  buttonurl: string;
}

export default function ProfileButton({
  buttontext,
  buttonurl,
}: ProfileButtonProps) {
  return (
    <div>
      <div className="grid col-start-1 ml-5 mr-5 py-2 rounded-xl col-end-5 bg-ash ">
        <Link href={buttonurl} className="grid grid-cols-2">
          <Button
            variant="ghost"
            className="bg-ash text-black font-poppins font-bold justify-self-start text-normal mr-12 p-6"
          >
            {buttontext}
          </Button>
          <ChevronRight className="h-6 w-6 justify-items-end self-center align-self justify-self-end mr-2" />
        </Link>
      </div>
    </div>
  );
}
