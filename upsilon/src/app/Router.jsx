import {
    Routes,
    Route,
  } from "react-router-dom";
  import LoginPage from '../pages/Login';
  import RegisterUser from '../pages/RegisterUser';
  import RegisterEmployer from '../pages/RegisterEmployer';
  
  const Router = () => (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registerUser" element={<RegisterUser />} />
      <Route path="/registerEmployer" element={<RegisterEmployer />} />
    </Routes>
  );
  
  export default Router;