import { motion } from "framer-motion";
import React, { useState } from "react";
import { generateHours, generateMinutes } from "../../utils/generateTimes";
import { FormData } from './Form';

interface InputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}


const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};


const Timepicker = ({ formData, setFormData }: InputProps) => {

  return (
    <motion.div className="flex bg-transparent text-green-500"
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    >
      <div className="justify-center mx-auto text-4xl p-2 ">
        <select
          name=""
          id=""
          value={formData.hours}
          className="font-digit text-6xl px-2 outline-none appearance-none bg-transparent bg-black-900"
          onChange={(e) => {
            setFormData({ ...formData, hours: e.target.value });
          }}
        >
          {generateHours().map((h, index) => (
            <option key={index} value={h}>
              {h}
            </option>
          ))}
        </select>

        <span className="px-2 font-digit text-6xl">:</span>
        <select
          name=""
          id=""
          value={formData.minutes}
          className="font-digit text-6xl px-2 outline-none appearance-none bg-transparent bg-black-900"
          onChange={(e) => {
            setFormData({ ...formData, minutes: e.target.value });
          }}
        >
          {generateMinutes(5).map((h, index) => (
            <option key={index} value={h}>
              {h}
            </option>
          ))}
        </select>
        <select
          name=""
          id=""
          value={formData.ap}
          className="font-digit text-6xl px-2 outline-none appearance-none bg-transparent bg-black-900"
          onChange={(e) => {
            setFormData({ ...formData, ap: e.target.value });
          }}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Timepicker;
