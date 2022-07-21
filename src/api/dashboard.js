import axios from "axios"

const getDashboardConfig = async (idToken, gatewayId) => {
    try {
        const url = 'http://13.66.157.148:8080/api_test/getDashboardConfig'
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + idToken
            },
            params: {
                gateway_id: gatewayId
            }
        })

        console.log("[getDashboardConfig]:", response.data)

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export { getDashboardConfig }