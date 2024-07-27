import Image from "next/image";

export default function HeroActions() {
  return (
    <div>
      <div className="flex gap-20 items-center justify-center ml-40 mr-40 mt-20 relative z-50 bg-desktop">
        <div className="flex flex-col p-2 w-56 h-56  justify-center bg-white-400/20 shadow-2xl rounded-2xl">
          <div className="font-poppins p-2 font-2xl font-bold">Easy to use</div>
          <div className="font-poppins p-2 font-xl">
            Simplified chore lists with intuitive layout for seamless daily
            planning
          </div>
        </div>
        <div className="flex flex-col p-2 w-56 h-56  justify-center bg-white-400/20 shadow-2xl rounded-2xl">
          <div className="font-poppins p-2 font-2xl font-bold">Easy to use</div>
          <div className="font-poppins p-2 font-xl">
            Simplified chore lists with intuitive layout for seamless daily
            planning
          </div>
        </div>
        <div className="flex flex-col p-2 w-56 h-56  justify-center bg-white-400/20 shadow-2xl rounded-2xl">
          <div className="font-poppins p-2 font-2xl font-bold">Easy to use</div>
          <div className="font-poppins p-2 font-xl">
            Simplified chore lists with intuitive layout for seamless daily
            planning
          </div>
        </div>
      </div>
    </div>
  );
}
