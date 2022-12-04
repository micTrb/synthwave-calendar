import React from "react";
import { motion } from "framer-motion";
import { FormData } from "./Form";
import { format } from "date-fns";
import { Priority } from "../../redux/ReminderSlice";
import clsx from "clsx";

interface InputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Recap = ({ formData, setFormData }: InputProps) => {
  return (
    <motion.div
      className="flex flex-col text-white w-1/2 mx-auto"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="text-white text-2xl flex flex-row space-x-4">
        <h1 className="text-bold">Task: </h1>
        <p className="text-bold">{formData.task}</p>
      </div>
      <p>{format(formData.date, "MM/dd/yyyy")}</p>
      <p>
        {formData.hours}:{formData.minutes} {formData.ap}
      </p>
      <p>
        {
          Object.keys(Priority)[
            Object.values(Priority).indexOf(formData.priority)
          ]
        }
      </p>
      <p
        className={clsx(
          `w-12 text-center h-12 rounded-lg 
            items-center justify-center border-black-500 ${formData.priority} 
            
        `
        )}
      ></p>
    </motion.div>
  );
};

export default Recap;
