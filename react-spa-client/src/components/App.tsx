import { useKeycloak } from "@react-keycloak/web";
import { useState } from "react";

import apiClient from "@/service/apiClient";
import JsonViewer from "@/components/JsonViewer";

function App() {
  const { initialized, keycloak } = useKeycloak();
  const [resource, setResource] = useState<unknown>();

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

  const callApiHandler = () => {
    apiClient.get<unknown, unknown>("/").then(setResource);
  };

  return (
    <div>
      <button type="button" onClick={() => keycloak.logout()}>
        logout
      </button>
      <button type="button" onClick={callApiHandler}>
        get resource
      </button>
      {resource && <JsonViewer json={resource} />}
    </div>
  );
}

export default App;
