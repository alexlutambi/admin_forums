// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCB6_vpMQf8ctsg3-gulOfZMWvqmJ--Y5I',
  authDomain: 'fundishop-f5b04.firebaseapp.com',
  databaseURL: 'https://fundishop-f5b04.firebaseio.com',
  projectId: 'fundishop-f5b04',
  storageBucket: 'fundishop-f5b04.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:296082741873:android:6168432a8a5444d379d9d0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();
 messaging.requestPermission()
  .then(function() {
    console.log('Notification permission granted.');
    return messaging.getToken();
  })
  .then(function(token) {
    console.log('FCM Token:', token);
    // Save the token to your server or use it to send notifications
  })
  .catch(function(err) {
    console.error('Unable to get permission to notify.', err);
  });
// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };
 
  self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
  // Customize notification UI here
});

//https://fcm.googleapis.com/v1/projects/fundishop-f5b04/messages:send