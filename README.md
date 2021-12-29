# keycloak-example

## build docker image

```
ghq get git@github.com:keycloak/keycloak-containers.git
z keycloak-containers
git checkout 16.1.0
cd server/
docker build -t jboss/keycloak:16.1.0 .
```
