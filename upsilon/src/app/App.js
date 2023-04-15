import { BrowserRouter } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import Router from './Router';
import { useSelector } from 'react-redux';
import './App.scss';
import cn from "classnames";

const App = () => {
  return (
    
      <BrowserRouter>
        <div className="upsilon-app">
          <div className="upsilon">
          <Router />
          </div>
        </div>
      </BrowserRouter>
    
  );
}
export default App;
