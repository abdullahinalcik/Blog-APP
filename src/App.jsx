import { ToastContainer } from "react-toastify";

import "./App.css";


import AppRouter from "./router/AppRouter";
//*redux reduxtoolkit
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
