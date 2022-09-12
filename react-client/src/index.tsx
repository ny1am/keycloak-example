import { createRoot } from "react-dom/client";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import App from "./App";
import keycloakInstance from "./keycloakInstance";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ReactKeycloakProvider authClient={keycloakInstance}>
    <App />
  </ReactKeycloakProvider>
);
