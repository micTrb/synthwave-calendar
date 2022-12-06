import React, { useState } from "react";
import TaskName from "./Taskname";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "./Datepicker";
import Timepicker from "./Timepicker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setHours } from "date-fns/esm";
import { createDate } from "../../utils/createDate";
import { Navigate, useNavigate } from "react-router";
import { addReminder, Priority } from "../../redux/ReminderSlice";
import PrioritySelect from "./PrioritySelect";
import clsx from "clsx";
import Recap from "./Recap";

export interface Step {
  step: number;
  key: string;
  text: string;
}

export interface FormData {
  task: string;
  hours: string;
  minutes: string;
  ap: string;
  priority: Priority;
  date: Date;
}

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );

  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    task: "",
    hours: "00",
    minutes: "00",
    ap: "AM",
    priority: Priority["No Priority"],
    date: new Date(),
  });

  const formSteps: Step[] = [
    {
      step: 0,
      key: "task",
      text: "What you need to do?",
    },
    {
      step: 1,
      key: "time",
      text: "At what time?",
    },
    {
      step: 2,
      key: "priority",
      text: "Which priority you wanna give?",
    },
    {
      step: 3,
      key: "recap",
      text: "Recap",
    },
  ];

  const stepObj = formSteps.filter((obj) => {
    return obj.step === step;
  })[0];

  const PageDisplay = () => {
    if (stepObj.key === "task") {
      return <TaskName formData={formData} setFormData={setFormData} />;
    } 
    else if (stepObj.key === "time") {
      return <Timepicker formData={formData} setFormData={setFormData} />;
    } else if (stepObj.key === "priority") {
      return (
        <PrioritySelect
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (stepObj.key === "recap") {
      return <Recap formData={formData} setFormData={() => {}} />;
    }
  };

  const submitForm: () => void = () => {
    if (stepObj.key === "time") {

      console.log("time submit");
      
      const newDate = createDate(
        selectedDate,
        formData.hours,
        formData.minutes,
        formData.ap
      );

      setFormData({ ...formData, date: newDate });
      setStep((currStep) => currStep + 1);
      
    } else if (stepObj.key === "recap") {

      console.log(formData);
      
      dispatch(
        addReminder({
          content: formData.task,
          date: formData.date,
          priority: formData.priority,
        })
      );

      navigate("/");
    } else {
      setStep((currStep) => currStep + 1);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="m-auto w-full">
        <div className="my-8">
          <h1 className="text-white text-center text-3xl">{stepObj.text}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="flex justify-center items-center mt-16">
          <button
            className={clsx(
              `hover:opacity-100 opacity-70 m-4 px-4 py-2 
            text-xl rounded bg-green-500 cursor-pointer`
            )}
            onClick={() => {
              setStep((currStep) => currStep - 1);
            }}
          >
            {stepObj.step === 0 ? (
              <div
                className="flex flex-row space-x-4 items-center justify-center"
                onClick={() => navigate("/")}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>Back to Calendar</p>
              </div>
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </button>

          <button
            className="hover:opacity-100 opacity-70 m-4 px-4 py-2 text-xl rounded bg-green-500 cursor-pointer"
            onClick={submitForm}
          >
            {stepObj.step === formSteps.length - 1 ? (
              "Submit"
            ) : (
              <FontAwesomeIcon icon={faArrowRight} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
