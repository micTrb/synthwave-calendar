import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import { Priority } from "../../redux/ReminderSlice";
import { FormData } from "./Form";
import { motion } from "framer-motion";


interface InputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const PrioritySelect = ({ formData, setFormData }: InputProps) => {
  const [checked, setChecked] = useState<Priority>(Priority["No Priority"]);

  const handleSelectPriority = (p: Priority) => {
        
    setChecked(p);
    setFormData({
      ...formData,
      priority: p,
    });
  };

  const renderPriorityBlock: () => JSX.Element[] = () => {
    
    return Object.entries(Priority).map((key, value) => {

      return (
        <motion.div key={key[0]} className="flex flex-col"
        variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
        >
          <h1 className="text-white text-xl my-2 font-roadrage">{key[0]}</h1>
          <div
            onClick={() => handleSelectPriority(key[1])}
            className={clsx(
              `hover:shadow-white hover:shadow-left text-center h-16 rounded-lg 
            items-center justify-center border-black-500 ${key[1]} opacity-50 hover:opacity-80
        hover:border text-pink-400 cursor-pointer transition-all duration-400`,
              { "hover:opacity-100 opacity-[1] hover:shadow-white shadow-yellow": checked === key[1] }
            )}
          ></div>
        </motion.div>
      );
    });
  };

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
