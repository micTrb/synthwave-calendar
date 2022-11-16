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

const App = () => {
  return (
    <Router>
      <div className="items-center mt-8 sm:w-11/12 w-full mx-auto z-50">
        <Routes>
          <Route path="/" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
