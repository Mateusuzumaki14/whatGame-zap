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
function addRoom() {
    roomNome = document.getElementById("roomName").value;
    localStorage.setItem("localMisterioso", roomNome);
    firebase.database().ref("/").child(roomNome).update({
        purpose: 'adicionar sala'
    })
    setTimeout(function () {
        window.location = "WhatGamePage.html"
    }, 2000);

}


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
         snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Inicio del código
            console.log("Nomes das salas -" + Room_names);
            row = "<div class='room_name' id=" + Room_names +
             " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;


            //Final del código
        });
    });
}
getData();


function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function logout() {
    localStorage.removeItem("localsecreto");
    localStorage.removeItem("localMisterioso");
    window.location = ("index.html")
}



