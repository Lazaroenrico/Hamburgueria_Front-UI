import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./context/auth";
import Login from "./pages/Login";
import Settings from "./pages/Sttings";

const Router = () => {
  const { logged } = useAuth();


  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};

export default Router;
