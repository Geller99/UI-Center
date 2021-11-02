import React from "react";
import { Provider } from "react-redux";
import Router from "./components/Routing/Router";
import { store } from "./redux/store";
import "./styles/index.css";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router/>
      </div>
    </Provider>
  );
};

export default App;
