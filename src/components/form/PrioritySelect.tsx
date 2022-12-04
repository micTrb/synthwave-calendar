import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import Cell from "../Cell";
import { Priority } from "../../redux/ReminderSlice";

interface InputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PrioritySelect = ({ formData, setFormData }: InputProps) => {
  const [checked, setChecked] = useState("");

  const renderPriorityBlock: () => JSX.Element[] = () => {
    return Object.entries(Priority).map((key, value) => (
      <div key={key[0]} className="flex flex-col">
        <h1 className="text-white my-2">{key[0]}</h1>
        <div
          onClick={() => setChecked(key[0])}
          className={clsx(
            `hover:shadow-white hover:shadow-left text-center h-16 rounded-lg 
            items-center justify-center border-black-500 ${key[1]} opacity-50 hover:opacity-80
        hover:border text-pink-400 cursor-pointer transition-all duration-400`,
            { "hover:opacity-100 opacity-[1]": (checked === key[0]) }
          )}
        ></div>
      </div>
    ));
  };

  console.log(renderPriorityBlock());

  return (
    <div
      className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-16 md:gap-6 gap-4 w-1/4 mx-auto
    "
    >
      {renderPriorityBlock()}
    </div>
  );
};

export default PrioritySelect;
