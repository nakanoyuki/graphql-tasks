import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFount from "./components/NotFount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
