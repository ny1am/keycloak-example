# keycloak-example

## run docker container

```
docker-compose up
```

## export keycloak realm

```
docker exec -it keycloak-server /opt/jboss/keycloak/bin/standalone.sh \
-Djboss.socket.binding.port-offset=100 -Dkeycloak.migration.action=export \
-Dkeycloak.migration.provider=singleFile \
-Dkeycloak.migration.realmName=test-realm \
-Dkeycloak.migration.file=/tmp/data.json

docker cp keycloak-server:/tmp/data.json ~/Desktop/data.json
```
