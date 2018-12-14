const firebase = require('firebase-admin');

const serviceAccount = require('./danaqueue-7bf6d-firebase-adminsdk-w1f9j-c9b6e1b4e4.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

module.exports = firebase;
