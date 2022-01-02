# Usage

## keycloak server

```
cd ./keycloak-server
docker-compose up
```

http://localhost:8080/auth/admin
credentials: admin / admin

## resource server

```
cd ./resource-server
yarn
yarn start
```

http://localhost:5001

## frontend client

```
cd ./client
yarn
yarn start
```

http://localhost:3000
test-user / 1234

# Tools

## export keycloak realm

```
docker exec -it keycloak-server /opt/jboss/keycloak/bin/standalone.sh \
-Djboss.socket.binding.port-offset=100 -Dkeycloak.migration.action=export \
-Dkeycloak.migration.provider=singleFile \
-Dkeycloak.migration.realmName=test-realm \
-Dkeycloak.migration.file=/tmp/data.json

cd ./keycloak-server
docker cp keycloak-server:/tmp/data.json ./data/test-realm.json
```

# TODO

- [ ] clean up client code
- [x] clean up server code
- [ ] nextjs client
- [ ] better README
- [ ] clean up keycloak config
