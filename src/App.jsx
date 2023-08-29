import { ToastContainer } from "react-toastify";


import "./App.css";


import AppRouter from "./router/AppRouter";
//*redux reduxtoolkit
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
//*refresh de login bilgilerini sesisonstorage atmak için
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
        <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
