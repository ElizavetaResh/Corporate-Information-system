import {
    Routes,
    Route,
  } from "react-router-dom";
  import LoginPage from '../pages/Login';
  import RegisterUser from '../pages/RegisterUser';
  import RegisterEmployer from '../pages/RegisterEmployer';
  import Task from '../pages/Task';
  import Rezume from '../pages/Rezume';
  import NotFound from "../pages/NotFound";
  
  const Router = () => (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/rezume" element={<Rezume />} />
      <Route path="/registerUser" element={<RegisterUser />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registerEmployer" element={<RegisterEmployer />} />
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  );
  
  export default Router;