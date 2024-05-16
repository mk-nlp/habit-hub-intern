import { Button } from "./ui/button";

interface ButtonProps {
  buttonText: string;
}

export default function ButtonComponent({ buttonText }: ButtonProps) {
  return (
    <Button className=" bg-white font-poppins font-bold text-2xl text-black  shadow-xl p-7 ">
      {buttonText}
    </Button>
  );
}
