import SuggestionComponent from "@/components/suggestionTopic";

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
        />
        <SuggestionComponent
          suggestion="Run a mile"
          category="exercise"
          explanation="Become your best version"
        />
        <SuggestionComponent
          suggestion="Clean your room"
          category="cleaning"
          explanation="Stay organized"
        />
      </div>
    </div>
  );
}
