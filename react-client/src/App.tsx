import { useKeycloak } from "@react-keycloak/web";

import apiClient from "./apiClient";

function App() {
  const { initialized, keycloak } = useKeycloak();

  if (!initialized) {
    return <div>loading...</div>;
  }

  if (!keycloak.authenticated) {
    return (
      <button
        type="button"
        onClick={() => keycloak.login({ redirectUri: "http://localhost:3000" })}
      >
        login
      </button>
    );
  }

  return (
    <div>
      <button type="button" onClick={() => keycloak.logout()}>
        logout
      </button>
      <button type="button" onClick={() => apiClient.get("/")}>
        call ip
      </button>
    </div>
  );
}

export default App;
