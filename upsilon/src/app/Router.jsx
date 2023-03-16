import {
    Routes,
    Route,
  } from "react-router-dom";
  import LoginPage from '../pages/Login';
  
  const Router = () => (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
  
  export default Router;