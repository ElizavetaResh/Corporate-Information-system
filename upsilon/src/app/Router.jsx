import {
    Routes,
    Route,
  } from "react-router-dom";
  import LoginPage from '../pages/Login';
  import RegisterUser from '../pages/RegisterUser';
  import RegisterEmployer from '../pages/RegisterEmployer';
  import Task from '../pages/Task';
  import Rezume from '../pages/Rezume';
  
  const Router = () => (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/rezume" element={<Rezume />} />
      <Route path="/registerUser" element={<RegisterUser />} />
      <Route path="/registerEmployer" element={<RegisterEmployer />} />
    </Routes>
  );
  
  export default Router;