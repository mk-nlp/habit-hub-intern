import SuggestionComponent from "@/components/suggestionTopic";
import BottomBar from "@/components/bottomBar";
import ButtonComponent from "@/components/button";
import { useTranslations } from "next-intl";

export default function SuggestionsPage() {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-4">
      <div className="grid col-start-2 col-end-4 justify-center font-poppins mt-5 font-bold">
        {t("SuggestionsPage.SuggestionHeader")}
      </div>
      <div className="grid col-start-1 col-end-4">
        <SuggestionComponent
          suggestion={t("SuggestionsPage.SuggestionCategory1Header")}
          category="study"
          explanation={t("SuggestionsPage.SuggestionCategory1Text")}
          task={t("SuggestionsPage.Task1")}
          task2={t("SuggestionsPage.Task2")}
          task1emoji="📖"
          task2emoji="📚"
        />
        <SuggestionComponent
          suggestion={t("SuggestionsPage.SuggestionCategory2Header")}
          category="exercise"
          explanation={t("SuggestionsPage.SuggestionCategory2Text")}
          task={t("SuggestionsPage.Task3")}
          task2={t("SuggestionsPage.Task4")}
          task1emoji="🏃‍♂️"
          task2emoji="🏋️"
        />
        <SuggestionComponent
          suggestion={t("SuggestionsPage.SuggestionCategory3Header")}
          category="cleaning"
          explanation={t("SuggestionsPage.SuggestionCategory3Text")}
          task={t("SuggestionsPage.Task5")}
          task2={t("SuggestionsPage.Task6")}
          task1emoji="🪣"
          task2emoji="🧼"
        />
      </div>
      <div className=" grid col-start-1 col-end-5 mt-3">
        <BottomBar />
      </div>
    </div>
  );
}
