import React from "react";
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Step1 from "./frontend/step1";
import Step2 from "./frontend/step2";
import Step3 from "./frontend/step3";
import Step4 from "./frontend/step4";
import Step5 from "./frontend/step5";
import Step6 from "./frontend/step6";
import Step7 from "./frontend/step7";
import Error from "./frontend/error";
import Test from "./frontend/test";
import Login from "./backend/login";
import Home from "./backend/home";


function App() {
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Step1 />} />
          <Route path="/otp"  element={<Step2 />} />
          <Route path="/profile"  element={<Step3 />} />
          <Route path="/questions"  element={<Step4 />} />
          <Route path="/uploadDoc"  element={<Step5 />} />
          <Route path="/payment"  element={<Step6 />} />
          <Route path="/dashboard"  element={<Step7 />} />
          <Route path="/error"  element={<Error />} />
          <Route path="/test"  element={<Test />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/login"  element={<Login />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;