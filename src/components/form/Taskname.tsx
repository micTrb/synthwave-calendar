import React from "react";
import { motion } from "framer-motion";
import { FormData } from './Form';

interface InputProps {
  formData: FormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}


const TaskName = ({ formData, setFormData }: InputProps) => {

  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  return (
    <motion.div
      className="flex flex-col p-4"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"

    >
      <input
        className="lg:w-1/3 md:w-1/2 w-full mx-auto bg-black-900 text-white
        hover:border-green-500/60 border-green-300/30 border-2 
          hover:opacity-100 focus:opacity-100  opacity-80
          cursor-pointer 
          focus:outline-none focus:border-green-500 
          transition-all duration-200
          text-xl rounded-lg p-4"
        type="text"
        placeholder="Task Name..."
        required
        value={formData.task}
        onChange={(e) => {
          setFormData({ ...formData, 
            task: e.target.value,          
          });
        }}
      />
    </motion.div>
  );
}

export default TaskName;
