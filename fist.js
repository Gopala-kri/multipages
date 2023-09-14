const firebaseConfig = {
  apiKey: "AIzaSyABGTgBWOUMnLhz4OIypEf4ZGVHIGVjFVA",
  authDomain: "gopal-database-ab991.firebaseapp.com",
  databaseURL: "https://gopal-database-ab991-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gopal-database-ab991",
  storageBucket: "gopal-database-ab991.appspot.com",
  messagingSenderId: "993123830102",
  appId: "1:993123830102:web:9bb9b109039bdf0f8c6ef7",
  measurementId: "G-ETHJV9T4K0"
};


firebase.initializeApp(firebaseConfig);



var username = localStorage.getItem("ur name");
  document.getElementById("usernameDisplay").innerHTML = "Welcome, " + username + "!";


       
function myroom() {
       const roomName = document.getElementById('roomName').value;
       const roomRef = firebase.database().ref('rooms').push();
       roomRef.set({
           name: orderId
       }).then(() => {
           document.getElementById('displayRoomName').innerText = "Room Name: " + orderName + "!";
           window.location.href = "second.html";
       });
   }      
