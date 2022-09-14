import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "test-realm",
  clientId: "web",
});

export default keycloakInstance;
