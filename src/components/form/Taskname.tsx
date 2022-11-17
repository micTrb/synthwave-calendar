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
      className="flex flex-col"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <input
        className="w-1/4 mx-auto bg-black-900 text-white border-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
         border-green-500 text-gray-900 
        text-xl rounded-lg p-4"
        type="text"
        placeholder="First Name..."
        value={formData.task}
        onChange={(e) => {
          setFormData({ ...formData, task: e.target.value });
        }}
      />
    </motion.div>
  );
}

export default TaskName;
