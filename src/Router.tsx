import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Sttings";

const Router = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Routes>
      <Route path="/homepage" element={<Home setLogged={setLogged} />} />
      <Route path="/settings" element={<Settings setLogged={setLogged} />} />
      <Route path="/" element={<Login setLogged={setLogged} />} />
    </Routes>
  );
};

export default Router;
