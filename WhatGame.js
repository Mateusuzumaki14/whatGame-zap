const firebaseConfig = {
    apiKey: "AIzaSyDGkQPY1jZE-_NHovhse6p5wY-aqY2K44M",
    authDomain: "whatgame-bdbf9.firebaseapp.com",
    databaseURL: "https://whatgame-bdbf9-default-rtdb.firebaseio.com",
    projectId: "whatgame-bdbf9",
    storageBucket: "whatgame-bdbf9.appspot.com",
    messagingSenderId: "90514574754",
    appId: "1:90514574754:web:d02804972476785467b6fb"
  };
  firebase.initializeApp(firebaseConfig)
function login(){ 
    User=document.getElementById("NameUser").value;
    localStorage.setItem("localsecreto",User);
    firebase.database().ref("/users").child(User).update({
        purpose:'adicionar Usuario'
    })
    setTimeout(function()  {
        window.location="WhatGameRoom.html" 
    }, 2000);
   
}
