import { ChevronRight } from "lucide-react";

interface SuggestionComponentProps {
  suggestion: string;
  category: string;
  explanation: string;
}

export default function SuggestionComponent({
  suggestion,
  category,
  explanation,
}: SuggestionComponentProps) {
  const colors = {
    study: {
      yellow: "bg-yellow-300",
      green: "bg-green-300",
    },
    exercise: {
      blue: "bg-blue-300",
      orange: "bg-orange-300",
    },
    cleaning: {
      lime: "bg-lime-300",
      pink: "bg-pink-300",
    },
  };

  const emojis = {
    study: "🧠",
    exercise: "🏋️",
    cleaning: "🧹",
  };

  return (
    <div className="grid grid-cols-4 mt-16">
      <div className="grid col-start-1 col-end-4  text-center items-center">
        <div className=" font-poppins font-medium text-xl ml-5 text-nowrap text-start">
          {emojis[category as keyof typeof emojis]} {suggestion}
        </div>
      </div>
      <div className="grid grid-cols-2 col-start-4 ml-20 text-nowrap items-center">
        <div className=" font-poppins text-xs font-extrabold">See all</div>
        <ChevronRight className=" w-4 ml-11" />
      </div>
      <div className="grid col-start-1 col-end-4 mt-2 mr-2 font-poppins items-center text-nowrap text-start ml-3">
        {explanation}
      </div>
      <div className=" grid col-start-1 col-end-4 p-3 mt-2 ml-5 w-full rounded-xl bg-green">
        {" "}
        LOLOL
      </div>
    </div>
  );
}
