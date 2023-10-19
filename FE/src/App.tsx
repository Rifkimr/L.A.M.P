import { Route, Routes } from "react-router-dom";
import Home from "./features/home/component/home";
import LoginTc from "./features/home/component/LoginTc";
import RegisterSd from "./features/home/component/RegisterSd";
import Role from "./features/home/component/Role";
import LoginSd from "./features/home/component/LoginSd";
import RegisterTc from "./features/home/component/RegisterTc";
import CardDetail from "./features/home/component/CardDetail";
import DasboardTeacher from "./features/home/component/DasboardTeacher";
import SidebarWithHeader from "./features/home/component/Learn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<Role />} />
        <Route path="/login/teacher" element={<LoginTc />} />
        <Route path="/login/student" element={<LoginSd />} />
        <Route path="/register/teacher" element={<RegisterTc />} />
        <Route path="/register/student" element={<RegisterSd />} />
        <Route path="/carddetail" element={<CardDetail />} />
        <Route path="/DasboardTeacher" element={<DasboardTeacher />} />
        <Route path="/learn" element={<SidebarWithHeader />} />
      </Routes>
    </>
  );
}

export default App;
