import { Ghost } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function RoutineButtons() {
  return (
    <div className="grid grid-cols-4 justify-center items-center">
      <div className="grid col-start-2 justify-center">
        <Button className="bg-purple font-poppins font-bold rounded-xl mr-4 text-sm text-black shadow-xl w-20 h-8 hover:bg-purple hover:text-white">
          All
        </Button>
      </div>
      <div className="grid col-start-3 justify-center">
        <Button className=" bg-white border border-gray-300 mr-2 font-poppins font-bold rounded-xl text-xs  text-gray-400 shadow-xl w-20 px-11 h-8 hover:bg-purple hover:text-white hover:border-purple">
          Daily Routine
        </Button>
      </div>
      <div className="grid col-start-4 justify-center">
        <Button className=" bg-white border border-gray-300 font-poppins font-bold rounded-xl ml-2 text-xs  text-gray-400 shadow-xl w-20 px-11 h-8 hover:bg-purple hover:text-white hover:border-purple">
          Study routine
        </Button>
      </div>
      <div className=" grid grid-rows-3 col-start-5 ml-9 justify-center">
        <Button variant={"ghost"}>
          <Image
            src="dots.svg"
            alt="dots"
            width={6}
            height={6}
            className="mt-20"
          />
        </Button>
      </div>
    </div>
  );
}
