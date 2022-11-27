import React, { useState } from "react";
import { generateHours, generateMinutes } from "../../utils/generateTimes";
import { FormData } from './Form';

interface InputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Timepicker = ({ formData, setFormData }: InputProps) => {



  
  return (
    <div className="flex bg-gray-100">
      <div className="justify-center mx-auto text-4xl p-2 text-green-500 bg-black-900">
        <select
          name=""
          id=""
          className="px-2 outline-none appearance-none bg-black-900"
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
        <span className="px-2">:</span>
        <select
          name=""
          id=""
          className="px-2 outline-none appearance-none bg-transparent bg-black-900"
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
          className="px-2 outline-none appearance-none bg-transparent bg-black-900"
          onChange={(e) => {
            setFormData({ ...formData, ap: e.target.value });
          }}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
};

export default Timepicker;
