import Image from "next/image";
export default function DesktopTopBar() {
  return (
    <div className="flex  border justify-between border-b-2 z-20 bg-white border-gray-200">
      <div className="flex items-center justify-start ml-20">
        <Image src="/loading.svg" width={60} height={40} alt="Logo" />
        <h1 className="text-center font-poppins text-3xl font-extrabold items-center">
          HabitHUB
        </h1>
      </div>
      <div className="flex font-poppins gap-16 mr-20 justify-end items-center">
        <h1>About Us</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}
