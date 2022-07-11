import axios from 'axios'

const getGatewayConfig = async (idToken, gatewayId) => {
    try {
        // const url = import.meta.env.VUE_APP_API_URL + '/api/getGatewayInfo'
        const url = 'http://13.66.157.148:8080/api/getGatewayInfo'
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + idToken
            }, 
            req: {
                gatewayId: gatewayId
            }
        })

        console.log(gatewayId)
        console.log(response.data)

        return response.data.gatewayInfo
    } catch (error) {
        console.log(error)
    }
}

export { 
    getGatewayConfig
}