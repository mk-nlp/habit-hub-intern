import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BottomBar() {
  return (
    <div className="flex flex-row items-center justify-around w-full h-20  border border-ash rounded-t-2xl shadow-[rgba(0,0,0,0.75)_11px_23px_47px_11px] bg-white relative z-10">
      <div className="flex flex-row items-center gap-10">
        <Button variant="ghost">
          <Image
            src="/cal-2.svg"
            width={20}
            height={20}
            alt="Calendar"
            className="cursor-pointer"
          />
        </Button>
        <Button variant="ghost">
          <Image
            src="/checklist-2.svg"
            width={20}
            height={20}
            alt="Checklist"
          />
        </Button>
        <Button variant="ghost">
          <Image src="/profile-2.svg" width={20} height={20} alt="Profile" />
        </Button>
      </div>
    </div>
  );
}
