import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AppRoutes } from "./pages/AppRoutes";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <AppRoutes />
      </Router>
      <ToastContainer />
    </I18nextProvider>
  );
}

export default App;
