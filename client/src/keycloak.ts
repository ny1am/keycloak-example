import Keycloak from 'keycloak-js'


const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'test-realm',
  clientId: 'web',
})

export default keycloak
