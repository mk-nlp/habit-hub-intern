"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PlusButtonProps {
  buttonurl: string;
}

export default function PlusButton({ buttonurl }: PlusButtonProps) {
  const router = useRouter();
  return (
    <div className="fixed bottom-10 ">
      <Button
        className="bg-ash shadow-2xl rounded-full absolute bottom-32 left-80 w-14 h-14 hover:bg-purple hover:text-white"
        onClick={() => router.push(buttonurl)}
      >
        <Plus size={30} className=" text-black hover:text-white  " />
      </Button>
    </div>
  );
}
