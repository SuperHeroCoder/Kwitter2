const firebaseConfig = {
    apiKey: "AIzaSyBCriXBrUYg5qeiCLk_5nuFrZBTrrWoYac",
    authDomain: "kwitter-a16fc.firebaseapp.com",
    databaseURL: "https://kwitter-a16fc-default-rtdb.firebaseio.com",
    projectId: "kwitter-a16fc",
    storageBucket: "kwitter-a16fc.appspot.com",
    messagingSenderId: "93769977222",
    appId: "1:93769977222:web:98e9b2fc83fd920fc5f007",
    measurementId: "G-H5X0NJBQ2C"
};

firebase.initializeApp(firebaseConfig);
//firebase links end



function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" })
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name -" + room_name);
            row = "<div class='room_name'id=" + room_name + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div<hr>";
            document.getElementById("output").innerHTML += row;

            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location = "kwiter_page.html"
}

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}