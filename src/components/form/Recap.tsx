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
      className="flex flex-col text-white lg:w-1/2 md:w-11/12 w-11/12 mx-auto space-y-2 font-xirod bg-purple-800 p-4 rounded-xl"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >


      <div>
        <p className='text-3xl'>Task:</p>
        <p className="font-medium p-2 rounded text-2xl 
				mb-2 text-start font-digit">{formData.task}</p>
      </div>

      <div>
        <p className='text-3xl'>When:</p>

        <div className="p-2 rounded">
          <p className="text-white text-2xl font-digit">
            {format(formData.date, "MM/dd/yyyy")}
          </p>
          <p className="text-white text-2xl font-digit">
            {formData.hours}:{formData.minutes} {formData.ap}
          </p>
        </div>

      </div>

      <div className='w-full '>
        <p className='text-3xl'>Priority:</p>
        <div className="p-2 rounded">

          <p className='my-1 font-digit text-2xl'>{Object.keys(Priority)[Object.values(Priority).indexOf(formData.priority)]}</p>

          <div className={clsx(`w-1/6 h-5 rounded-lg ${formData.priority}`)}></div>
        </div>
      </div>


    </motion.div >
  );
};

export default Recap;
