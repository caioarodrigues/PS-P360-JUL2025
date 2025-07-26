import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutUserPage from "@/pages/AboutUserPage";
import GlobalHeader from "@/components/global-header";

const AppRoutes = () => (
  <>
    <GlobalHeader />
    <Routes>    
      <Route path="/" element={<HomePage />} />
      <Route path="/about-user" element={<AboutUserPage />} />
    </Routes>
  </>
);

export default AppRoutes;
