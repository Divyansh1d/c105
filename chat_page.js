var firebaseConfig = {
    apiKey: "AIzaSyBQb8B-L0JydxvmW6Xiv6T7BDHPctgh2m4",
    authDomain: "divyansh-e87e5.firebaseapp.com",
    databaseURL: "https://divyansh-e87e5-default-rtdb.firebaseio.com",
    projectId: "divyansh-e87e5",
    storageBucket: "divyansh-e87e5.appspot.com",
    messagingSenderId: "1096403089554",
    appId: "1:1096403089554:web:4c2e37c03f29ea1e9c4e4b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,massage:msg,like:0});
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  //start code
  console.log(firebase_massage_id);
        console.log(message_data);
        name = message_data["name"];
        message = message_data["message"];
        like = message_data["like"];
        name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
        message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
        like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
        span_with_tag="<span class= 'glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

        row=name_with_tag+span_with_tag+message_with_tag+like_button;
        document.getElementById("output").innerHTML+=row;
//End code
  
} });  }); }
getData();

function updateLike(message_id){
  console.log("clicked on like button -"+message_id);
  button_id=message_id;
  likes = document.getElementById(button_id).value;
  update_likes = Number(likes)+1;
  console.log(update_like);

  firebase.database().ref(room_name).child(messsage_id).update({
        like:updated_likes
  });
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";}