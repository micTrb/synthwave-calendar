import React, { useState } from "react";
import TaskName from "./Taskname";
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
    hours: "04",
    minutes: "15",
    ap: "PM",
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
    } else if (stepObj.key === "time") {
      return <Timepicker formData={formData} setFormData={setFormData} />;
    } else if (stepObj.key === "priority") {
      return <PrioritySelect formData={formData} setFormData={setFormData} />;
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
    <div className="h-screen w-full flex lg:items-center md:items-center items-start justify-center py-8">
      <div className="mx-auto w-full lg:mt-0 md:mt-0 mt-24">
        <div className="my-8 mx-4">
          <h1 className="font-roadrage text-white text-center lg:text-[4rem] md:text-[3rem] text-[2rem]">
            {stepObj.text}
          </h1>
        </div>
        <div className="overflow-hidden">{PageDisplay()}</div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>

                <p>Back</p>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            )}
          </button>

          <button
            className="hover:opacity-100 opacity-70 m-4 px-4 py-2 text-xl rounded bg-green-500 cursor-pointer"
            onClick={submitForm}
          >
            {stepObj.step === formSteps.length - 1 ? (
              "Submit"
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
