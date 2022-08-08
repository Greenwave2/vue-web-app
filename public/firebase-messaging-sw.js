// importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js')
// importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging.js')

// const config = {
//   apiKey: 'AIzaSyCvwHfqX0FHhsz9uqauU54SObeH8dyqk94',
//   authDomain: 'xindian-f463a.firebaseapp.com',
//   projectId: 'xindian-f463a',
//   storageBucket: 'xindian-f463a.appspot.com',
//   messagingSenderId: '227141088272',
//   appId: '1:227141088272:web:91c3bed3aa609683068695',
// }

// firebase.initializeApp(config)
// const messaging = firebase.messaging()

// // 後端推播
// messaging.onBackgroundMessage(function (payload) {
//   let notification = payload.notification
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload
//   )
//   console.log('self...', self)
//   // Customize notification here
//   const notificationTitle = `${notification.title}`
//   const notificationOptions = {
//     body: `${notification.body}`,
//     icon: '../src/assets/logo_winwin.png',
//   }
//   self.registration.showNotification(notificationTitle, notificationOptions)
// })
