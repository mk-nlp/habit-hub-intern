import { Plus } from "lucide-react";
import { Button } from "./ui/button";

export default function SuggestionButton() {
  return (
    <div>
      <Button
        variant="primary"
        className="bg-ash rounded-full w-12 h-12 font-bold hover:bg-purple hover:text-white"
      >
        <Plus size={24} />
      </Button>
    </div>
  );
}
