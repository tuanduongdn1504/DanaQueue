import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBigNSdU8Oux6_POgmfx2lG9WioXmJbbQc',
  authDomain: 'danaqueue-7bf6d.firebaseapp.com',
  projectId: 'danaqueue-7bf6d'
};
firebase.initializeApp(config);

export const firebaseStore = firebase.firestore();

firebaseStore.settings({
  timestampsInSnapshots: true
});
