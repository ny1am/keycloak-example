var express = require("express");
var session = require("express-session");
var cors = require("cors");
var Keycloak = require("keycloak-connect");

var app = express();
app.use(cors());

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.
var memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

var keycloak = new Keycloak(
  { store: memoryStore },
  {
    bearerOnly: true,
    clientId: "resource",
    serverUrl: "http://localhost:8080/auth",
    realm: "test-realm",
    credentials: { secret: "LeuObmTywhkCAjvrOlwlAKabAUTp3PeP" },
  }
);

app.use(keycloak.middleware());

app.get("/", keycloak.protect(), function (req, res) {
  res.json({
    resource_date: new Date(),
    resource_protected_data: "only authorized can see this",
    keycloak_token_content: req.kauth.grant.access_token.content,
  });
});

app.listen(5001);
