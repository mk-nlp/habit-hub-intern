import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

interface InputProps {
  id?: string;
  placeholder: string;
  type: string;
  value: string;
  name?: string;
  onChange: (e: any) => void;
}

export default function InputComponent({
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <Separator
        orientation="horizontal"
        className=" w-80 h-0.5 bg-black opacity-15 absolute mt-12 ml-6"
      />
      <Input
        className="bg-white font-poppins  text-black  shadow-xl p-6 mt-3 "
        placeholder={placeholder}
        type={type}
        required={true}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
