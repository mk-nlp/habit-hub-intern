import Image from "next/image";
import { Separator } from "./ui/separator";

export default function EmptyTasks() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full mt-5">
        <div className="text-3xl font-bold">
          <Image
            src={"vector-art.svg"}
            width={300}
            height={300}
            alt={"Vector Art"}
          />
        </div>
        <Separator className="mt-5 w-96" />
        <div className="text-lg mt-2 font-poppins font-bold">
          Nothing here yet...
        </div>
      </div>
    </div>
  );
}
