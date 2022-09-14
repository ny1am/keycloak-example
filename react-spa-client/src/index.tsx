import { createRoot } from "react-dom/client";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import App from "@/components/App";
import keycloakInstance from "@/service/keycloakInstance";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ReactKeycloakProvider authClient={keycloakInstance}>
    <App />
  </ReactKeycloakProvider>
);
