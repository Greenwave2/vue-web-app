import axios from 'axios'
import { getIdTokenPromise } from '@/firebase'

const subscribeGatewayTopics = async registrationToken => {
  console.log('[subscribeGatewayTopics] registrationToken: ', registrationToken)
  const idToken = await getIdTokenPromise()
  console.log('[subscribeGatewayTopics] idToken: ', idToken)

  let gatewayIdList = []
  try {
    // getGatewayIdList
    const url = 'http://13.66.157.148:8080/api/gatewayIdList'
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + idToken,
      },
    })
    console.log('[subscribeGatewayTopics] response: ', response.data)
    gatewayIdList = response.data
  } catch (error) {
    console.log(error)
  }

  console.log('[subscribeGatewayTopics] gatewayIdList: ', gatewayIdList)

  try {
    const url = 'http://13.66.157.148:8080/FCM/subscribeTopic'
    const response = await axios.post(
      url,
      {
        registrationTokens: registrationToken,
        topics: gatewayIdList,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + idToken,
        },
      }
    )

    console.log('[subscribeGatewayTopics]:', response.data)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { subscribeGatewayTopics }
