import Image from "next/image";

export default function BackGroundLines() {
  return (
    <Image
      src="/lines.svg"
      alt="Lines"
      width={1000}
      height={1000}
      className="absolute z-0 top-10 right-0"
    />
  );
}
