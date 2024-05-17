import { Button } from "./ui/button";

export default function TopDays() {
  return (
    <div className="grid grid-cols-4 bg-pink/60 h-40">
      <div className="grid col-start-2 col-end-4 justify-center mt-5 font-poppins font-bold">
        Today
      </div>
      <div className="grid grid-cols-7 col-start-1 col-end-5 mb-6 font-poppins font-bold items-center">
        <Button
          buttonUrl="/tomorrow"
          className="grid grid-rows-2 w-13 h-18 bg-pink-2/60 ml-2 rounded-xl hover:bg-purple hover:font-extrabold"
        >
          <div className=" text-sm mb-2 text-black">Sun</div>
          <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
            10
          </div>
        </Button>
        <Button
          buttonUrl="/tomorrow"
          className="grid grid-rows-2 w-13 h-18 bg-purple ml-2 rounded-xl hover:bg-purple hover:font-extrabold"
        >
          <div className=" text-sm mb-2 text-black font-extrabold">Mon</div>
          <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
            11
          </div>
        </Button>
        <Button
          buttonUrl="/tomorrow"
          className="grid grid-rows-2 w-13 h-18 bg-pink-2/60 ml-2 rounded-xl hover:bg-purple hover:font-extrabold"
        >
          <div className=" text-sm mb-2 text-black">Tue</div>
          <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
            12
          </div>
        </Button>
        <Button
          buttonUrl="/tomorrow"
          className="grid grid-rows-2 w-13 h-18 bg-pink-2/60 ml-2 rounded-xl hover:bg-purple hover:font-extrabold"
        >
          <div className=" text-sm mb-2 text-black">Wed</div>
          <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
            13
          </div>
        </Button>
        <Button
          buttonUrl="/tomorrow"
          className="grid grid-rows-2 w-13 h-18 bg-pink-2/60 ml-2 rounded-xl hover:bg-purple hover:font-extrabold"
        >
          <div className=" text-sm mb-2 text-black">Thu</div>
          <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
            14
          </div>
        </Button>
        <Button
          buttonUrl="/tomorrow"
          className="grid grid-rows-2 w-13 h-18 bg-pink-2/60 ml-2 rounded-xl hover:bg-purple hover:font-extrabold"
        >
          <div className=" text-sm mb-2 text-black">Fri</div>
          <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
            15
          </div>
        </Button>
        <Button
          buttonUrl="/tomorrow"
          className="grid grid-rows-2 w-13 h-18 bg-pink-2/60 ml-2 rounded-xl hover:bg-purple hover:font-extrabold"
        >
          <div className=" text-sm mb-2 text-black">Sat</div>
          <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
            16
          </div>
        </Button>
      </div>
    </div>
  );
}
