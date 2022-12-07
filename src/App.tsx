import React, { useState } from "react";
import Calendar from "./components/Calendar";
import { Counter } from "./components/Counter";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  RouterProvider,
  Route,
} from "react-router-dom";

import CreateReminder from "./components/CreateReminder";
import Form from "./components/form/Form";

const App = () => {
  return (
    <Router>
      <div className="items-center justify-center w-full mx-auto 
      bg-opacity-70 bg-no-repeat background">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/add-reminder" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
