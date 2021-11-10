import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMDrRw3wbLQE4xeMX6eHTxDZQjEtgAhW0",
  authDomain: "ultra-bio-ozone.firebaseapp.com",
  databaseURL: "https://ultra-bio-ozone.firebaseio.com",
  projectId: "ultra-bio-ozone",
  storageBucket: "ultra-bio-ozone.appspot.com",
  messagingSenderId: "773296169407",
  appId: "1:773296169407:web:e18e5bd62d01175b77810a"
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'getDataFirebase';
}
