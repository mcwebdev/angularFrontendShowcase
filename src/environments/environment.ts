// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'https://us-central1-angularux.cloudfunctions.net/webApi/',
  firebase: {
    apiKey: "AIzaSyCGi4NlvkdUDtWhCKeUMcoETGKPPfsYjXU",
    authDomain: "angularux.firebaseapp.com",
    databaseURL: "https://angularux.firebaseio.com",
    projectId: "angularux",
    storageBucket: "angularux.appspot.com",
    messagingSenderId: "55819497125",
    appId: "1:55819497125:web:13957f1ec551bc8259274c",
    measurementId: "G-X1C5QW10R0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
