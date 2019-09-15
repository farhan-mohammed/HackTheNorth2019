  
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAFHMZQwCNhrMzRIiax7jwKoym3KBjRngQ",
    authDomain: "hack-the-north-82cca.firebaseapp.com",
    databaseURL: "https://hack-the-north-82cca.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();