import { BrowserRouter } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import Router from './Router';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import './App.scss';
import cn from "classnames";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div >
          <div className="upsilon-app__container">
          <Router />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
