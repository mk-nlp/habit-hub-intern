interface TaskProps {
  task: string;
  category: string;
}

export default function AddedTask({ task, category }: TaskProps) {
  type ColorType = {
    [key: string]: {
      [key: string]: string;
    };
  };

  const colors: ColorType = {
    study: {
      yellow: "bg-yellow",
      green: "bg-green",
    },
    exercise: {
      blue: "bg-blue",
      orange: "bg-orange",
    },
    cleaning: {
      lime: "bg-lime",
      pink: "bg-pink",
    },
  };

  const colorKeys = Object.keys(colors[category as keyof typeof colors]);

  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];

  return (
    <div className="grid grid-cols-8 items-center justify-center">
      <div
        className={`grid col-start-1 col-end-8 py-4 items-center px-3 mt-4 w-96 ml-5 rounded-xl text-lg font-poppins ${
          colors[category as keyof typeof colors][randomColorKey]
        } `}
      >
        {" "}
        {task}{" "}
      </div>
    </div>
  );
}
