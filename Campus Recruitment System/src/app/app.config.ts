
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
  // Initialize Firebase
export const firebaseconfig = {
    apiKey: "AIzaSyAhAMbS2OgdaZ6rE0OgpiybYZPMKv6z1JA",
    authDomain: "campusrecruitmentsystem-d5226.firebaseapp.com",
    databaseURL: "https://campusrecruitmentsystem-d5226.firebaseio.com",
    storageBucket: "campusrecruitmentsystem-d5226.appspot.com",
    messagingSenderId: "783363994632"
  };
  

  export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
