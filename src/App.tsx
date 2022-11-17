import React, { useState } from "react";
import Calendar from "./components/Calendar";
import { Counter } from "./components/Counter";

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
      <div className="items-center mt-8 sm:w-11/12 w-full h-screen mx-auto z-50">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/add-reminder" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
