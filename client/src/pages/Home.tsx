import * as React from 'react'
import { useCallback } from 'react'
import { useKeycloak } from '@react-keycloak/web'

import { useAxios } from '../utils/hooks'

const HomePage = () => {
  const { keycloak } = useKeycloak()

  const axiosInstance = useAxios('http://localhost:5001')
  const callApi = useCallback(() => {
    !!axiosInstance.current && axiosInstance.current.get('/')
  }, [axiosInstance])

  return (
    <div>
      <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>

      {!!keycloak?.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  )
}

export default HomePage
