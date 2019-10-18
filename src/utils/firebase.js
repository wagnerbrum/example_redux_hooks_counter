import firebase from "firebase";

import { firebaseConfig } from "../config/firebase";

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
