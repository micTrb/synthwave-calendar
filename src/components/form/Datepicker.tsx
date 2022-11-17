import React, { useState } from "react";
import { motion } from "framer-motion";
import { FormData } from "./Form";
import Datepicker from "tailwind-datepicker-react"
import CalendarSelect from './CalendarSelect';


interface InputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactNode | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	defaultDate: new Date(),
	language: "en",
}



const DatePicker = ({ formData, setFormData }: InputProps) => {
  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const [show, setShow] = useState<boolean>(false);

  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <motion.div
      className="flex flex-col"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CalendarSelect />
    </motion.div>
  );
};

export default DatePicker;
