import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AudioProvider } from "./providers/AudioContextProvider.jsx";

const STRICT_MODE = import.meta.env.VITE_REACT_APP_ENABLE_STRICT_MODE;
const rootComponent =
  STRICT_MODE === "true" ? (
    <React.StrictMode>
      <AudioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AudioProvider>
    </React.StrictMode>
  ) : (
    <AudioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AudioProvider>
  );

ReactDOM.createRoot(document.getElementById("root")).render(rootComponent);
