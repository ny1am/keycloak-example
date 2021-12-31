# keycloak-example

## build docker image

```
ghq get git@github.com:keycloak/keycloak-containers.git
z keycloak-containers
git checkout 16.1.0
cd server/
docker build -t jboss/keycloak:16.1.0 .
```

## run docker container

```
z keycloak-example
docker-compose up
```

## export keycloak

```
docker exec -it keycloak-server /opt/jboss/keycloak/bin/standalone.sh \
-Djboss.socket.binding.port-offset=100 -Dkeycloak.migration.action=export \
-Dkeycloak.migration.provider=singleFile \
-Dkeycloak.migration.realmName=test-realm \
-Dkeycloak.migration.file=/tmp/data.json

docker cp keycloak-server:/tmp/data.json ~/Desktop/data.json
```
