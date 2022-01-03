import Keycloak, { KeycloakInstance } from "keycloak-js";

const keycloakInstance: KeycloakInstance = Keycloak({
  url: "http://localhost:8080/auth",
  realm: "test-realm",
  clientId: "web",
});

export default keycloakInstance;
