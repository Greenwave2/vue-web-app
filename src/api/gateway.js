import axios from 'axios'

const getGatewayConfig = async (idToken, gatewayId) => {
  try {
    // const url = import.meta.env.VUE_APP_API_URL + '/api/getGatewayInfo'
    const url = 'http://13.66.157.148:8080/api/getGatewayInfo'
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + idToken,
      },
      params: {
        gateway_id: gatewayId,
      },
    })

    console.log(gatewayId)
    console.log('[getGatewayConfig]: ', response.data)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getGatewayList = async idToken => {
  try {
    const url = 'http://13.66.157.148:8080/api/getGatewaydescriptions'
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + idToken,
      },
    })

    console.log('[getGatewayList]:', response.data)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { getGatewayConfig, getGatewayList }
