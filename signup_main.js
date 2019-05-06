// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYGa1n0M2A_wV8bBxUkQhobaBcs8YbuoM",
    authDomain: "signup-92dc8.firebaseapp.com",
    databaseURL: "https://signup-92dc8.firebaseio.com",
    projectId: "signup-92dc8",
    storageBucket: "signup-92dc8.appspot.com",
    messagingSenderId: "393861311367"
  };
  firebase.initializeApp(config);

var messages=firebase.database().ref('message');


document.getElementById('contact_form').addEventListener('submit',submitform);

function submitform(e){

    e.preventDefault();
    console.log(123);
var firstname=getinputval('firstname');

var lastname=getinputval('lastname');

var department=getinputval('department');

var password=getinputval('password');

var confirm_password=getinputval('confirm_password');

var contact_no=getinputval('contact_no');

var email=getinputval('email');

if (firstname!="" && lastname !="" && department!="" && contact_no !="" && confirm_password!="" && password !=""){
  saveMessage(firstname,lastname,department,password,username,contact_no,confirm_password,email);
console.log(email,confirm_password)
  firebase.auth().createUserWithEmailAndPassword(email, confirm_password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });

window.location="cong.html"
console.log("hi");
firebase.auth().signOut();
}
else{
console.log("no");
  window.alert("Fill all detail ");
}





}
function getinputval(id){
return document.getElementById(id).value;

}



function saveMessage(firstname,lastname,department,password,username,contact_no,confirm_password,email)
{


    var newMessageRef=messages.push();
        newMessageRef.set({firstname:firstname,
        lastname:lastname,
        department:department,
        password:password,
        confirm_password:confirm_password,
        contact_no:contact_no,
        email_id:email
    });



}
