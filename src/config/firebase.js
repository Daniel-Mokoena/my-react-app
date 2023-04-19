import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyuKGgKeC_AFfNFRoR5P9a7_cc6vHTo3E",
    authDomain: "agritech-37832.firebaseapp.com",
    projectId: "agritech-37832",
    storageBucket: "agritech-37832.appspot.com",
    messagingSenderId: "855827530409",
    appId: "1:855827530409:web:ef0090b6a457119a591fb8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


 