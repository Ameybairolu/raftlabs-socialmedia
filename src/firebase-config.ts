import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMgT-6_hUm-bs9WAG3jeV21iG7Na2FHM0",
    authDomain: "raftlabs-ba709.firebaseapp.com",
    projectId: "raftlabs-ba709",
    storageBucket: "raftlabs-ba709.appspot.com",
    messagingSenderId: "432746680192",
    appId: "1:432746680192:web:074d5ff6c740b41e3a3b65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
