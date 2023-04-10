import {
    Routes,
    Route,
  } from "react-router-dom";
  import LoginPage from '../pages/Login';
  import RegisterUser from '../pages/RegisterUser';
  import RegisterEmployer from '../pages/RegisterEmployer';
  import Task from '../pages/Task';
  
  const Router = () => (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/registerUser" element={<RegisterUser />} />
      <Route path="/registerEmployer" element={<RegisterEmployer />} />
    </Routes>
  );
  
  export default Router;