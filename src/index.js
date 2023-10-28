import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UsersContextProvider } from "./context/userContext";

import Inicializador from "./utils/inicializador";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersContextProvider>
      <Inicializador>
        <App />
      </Inicializador>
    </UsersContextProvider>
  </React.StrictMode>
);
