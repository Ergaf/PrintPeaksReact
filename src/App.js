import './bootstrap.css';
import './bootstrap.css.map';
import './StylesOld.css';
import './App.css';
import {Provider} from "react-redux";
import store from "./stores/store";
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react";
import AllWindow from "./components/AllWindow";

function App() {

  return (
      <Provider store={store}>
          <Router>
              <AllWindow/>
          </Router>
      </Provider>
  );
}

export default App;
