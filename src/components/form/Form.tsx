import React, { useState } from "react";
import TaskName from "./Taskname";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "./Datepicker";

export interface FormData {
  task: string;
  date: Date;
}

const Form: React.FC = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    task: "",
    date: new Date()
  });

  const FormTitles: string[] = [
    "What you need to do?",
    "When?",
    "At what time?",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <TaskName formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <DatePicker formData={formData} setFormData={setFormData} />;
    } else {
      // return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const submitForm: () => void = () => {
    if (page === FormTitles.length - 1) {
      alert("FORM SUBMITTED");
      console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="m-auto w-full">
        <div className="my-8">
          <h1 className="text-white text-center text-3xl">
            {FormTitles[page]}
          </h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="flex justify-center items-center mt-16">
          <button
            className="m-4 px-4 py-2 text-xl rounded bg-green-500 cursor-pointer"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            className="m-4 px-4 py-2 text-xl rounded bg-green-500 cursor-pointer"
            onClick={submitForm}
          >
            {page === FormTitles.length - 1 ? (
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
