import React from "react";
import ReactDOM from "react-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import App from "./App";
import keycloakInstance from "./keycloakInstance";

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloakInstance}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
