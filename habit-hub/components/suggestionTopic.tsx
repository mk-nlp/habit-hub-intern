import { ChevronRight } from "lucide-react";
import SuggestionButton from "./suggestionButton";
import Task from "./task";

interface SuggestionComponentProps {
  suggestion: string;
  category: string;
  explanation: string;
  task: string;
  task2: string;
}

export default function SuggestionComponent({
  suggestion,
  category,
  explanation,
  task,
  task2,
}: SuggestionComponentProps) {
  const emojis = {
    study: "🧠",
    exercise: "🏋️",
    cleaning: "🧹",
  };

  return (
    <div className="grid grid-cols-4 mt-16">
      <div className="grid col-start-1 col-end-4  text-center items-center">
        <div className=" font-poppins font-bold text-xl ml-5 text-nowrap text-start">
          {emojis[category as keyof typeof emojis]} {suggestion}
        </div>
      </div>
      <div className="grid grid-cols-2 col-start-4 ml-28 text-nowrap items-center">
        <div className=" font-poppins text-xs font-extrabold">See all</div>
        <ChevronRight className=" w-4 ml-11" />
      </div>
      <div className="grid col-start-1 col-end-4 mt-2 mr-2 font-poppins text-xs font-medium items-center text-nowrap text-start ml-3">
        {explanation}
      </div>
      <div className={`grid grid-cols-8 col-start-1 col-end-5 `}>
        <Task task={task} category={category} />
        <Task task={task2} category={category} />
      </div>
    </div>
  );
}
