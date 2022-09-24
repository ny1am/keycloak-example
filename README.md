# Keycloak Example

A simple example of accessing protected with [Keycloak](https://www.keycloak.org/) resource in a context of single page react application.

> **Warning**
> This software is meant for demonstration purposes only. Please refer to official documentation to use Keycloak in production environment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

The tools you need to run the example:

- [docker](https://www.docker.com/) to run keycloak server
- [node.js](https://nodejs.org) to run resource server / spa client (required node version is specified in a corresponding `.nvmrc` file)
- [yarn](https://yarnpkg.com/) package manager

### Keycloak Server

Keycloak server is set up as a docker container.

To start up Keycloak server navigate to a corresponding folder and run docker-compose:

```
cd ./keycloak-server
docker-compose up
```

To make sure Keycloak server is up and running navigate to admin console `http://localhost:8080/auth/admin`.

Keycloak admin credentials are:

```
username: admin
password: admin
```

On startup the container imports `test-realm` configuration which is used for the demo.
User credentials you will need to go through the example are:

```
username: test-user
password: 1234
```

### Resource Server

Resource server is set up as a node.js application.

To start up Resource server navigate to a corresponding folder, install dependencies and run the server:

```
cd ./resource-server
yarn
yarn start
```

When you open `http://localhost:5001` in your browser you will see `Access denied` response since resource is protected.

### React.js SPA Client

To start up SPA client navigate to a corresponding folder, install dependencies and run the server:

```
cd ./react-client
yarn
yarn start
```

## Usage

Navigate to `http://localhost:3000` in your browser to go through example.
You will need `test-user` credentials specified above.

### Going further

You may want to play around with Keycloak configuration. If you would ever need to persist `test-realm` settings please export it and save as `data/test-realm.json` file with the following commands:

```
docker exec -it keycloak-server /opt/jboss/keycloak/bin/standalone.sh \
-Djboss.socket.binding.port-offset=100 -Dkeycloak.migration.action=export \
-Dkeycloak.migration.provider=singleFile \
-Dkeycloak.migration.realmName=test-realm \
-Dkeycloak.migration.file=/tmp/data.json

cd ./keycloak-server
docker cp keycloak-server:/tmp/data.json ./data/test-realm.json
```

## Troubleshooting

Make sure your browser has third-party cookies [enabled](https://akohubteam.medium.com/how-to-enable-third-party-cookies-on-your-browsers-f9a8143b8cc5).
