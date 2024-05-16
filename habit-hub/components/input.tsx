import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

interface InputProps {
  placeholder: string;
  type: string;
}

export default function InputComponent({ placeholder, type }: InputProps) {
  return (
    <div>
      <Separator
        orientation="horizontal"
        className=" w-96 h-0.5 bg-black opacity-15 absolute mt-12 ml-5"
      />
      <Input
        className="bg-white font-poppins  text-black  shadow-xl p-6 mt-3 "
        placeholder={placeholder}
        type={type}
        required={true}
      />
    </div>
  );
}
