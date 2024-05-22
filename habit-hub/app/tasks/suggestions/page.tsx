import SuggestionComponent from "@/components/suggestionTopic";
import BottomBar from "@/components/bottomBar";
import ButtonComponent from "@/components/button";

export default function SuggestionsPage() {
  return (
    <div className="grid grid-cols-4">
      <div className="grid col-start-2 col-end-4 justify-center font-poppins mt-5 font-bold">
        Suggestions
      </div>
      <div className="grid col-start-1 col-end-4">
        <SuggestionComponent
          suggestion="Learn and study more"
          category="study"
          explanation="Stay hungry for knowledge"
          task="📖 Read"
          task2="📚 Study"
        />
        <SuggestionComponent
          suggestion="Run a mile"
          category="exercise"
          explanation="Become your best version"
          task="🏃‍♂️ Run"
          task2="🏋️ Lift weights"
        />
        <SuggestionComponent
          suggestion="Clean your room"
          category="cleaning"
          explanation="Stay organized"
          task="🪣 Mop the house"
          task2="🧼 Clean the bathroom"
        />
      </div>
      <div className="grid col-start-2 col-end-4 mt-3">
        <ButtonComponent buttonUrl="/tasks" buttonText="Add more" />
      </div>
      <div className=" grid col-start-1 col-end-5 mt-3">
        <BottomBar />
      </div>
    </div>
  );
}
