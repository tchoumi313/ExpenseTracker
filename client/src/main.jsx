import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
import { Toaster } from "react-hot-toast";
import store from "./redux/store"
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster position="bottom-center" duration={500} />
    </MantineProvider>
  </React.StrictMode>
);
