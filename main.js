
var full_n=[];
var j=localStorage.getItem("email_value");
console.log("email" + j);


  var ref=firebase.database().ref('message');
  ref.on('value',gotdata,errdata);

function gotdata(data){


	var score=data.val();
//		console.log(score);
	//	console.log('hello');
	var keys=Object.keys(score);
	//	console.log(keys);

var flag=0;
for(var i=0;i<keys.length;i++){
var k=keys[i];
var email=score[k].email_id;
var name=score[k].firstname;
//console.log(email,name);

console.log("email" + email);

var key = Object.keys(score[k]);



if (j == email){
  // console.log(score[k]);

 firstname=score[k].firstname;
 lastname=score[k].lastname;
 phone = score[k].contact_no;
 email_id=score[k].email_id;
 department=score[k].department;
 document.getElementById("firstname").innerHTML=firstname;
  document.getElementById("lastname").innerHTML=lastname;
   document.getElementById("department").innerHTML=department;
    document.getElementById("email").innerHTML=email_id;
     document.getElementById("phone").innerHTML=phone;
console.log("name " + firstname );
break;
flag=1;
}


}
for(var i=0;i<keys.length;i++){
var k=keys[i];
var name=score[k].firstname;
var key = Object.keys(score[k]);
//console.log(name);
full_n.push(name);
document.getElementById("friend").innerHTML += ('<div><i class="fas fa-user-circle"></i><div class = "innerfriend" style="font-size:20px">'+name+'</div></div>');
}
}
function errdata(err){console.log('error!');
console.log(err);}

function my() {
  var maintext=document.getElementById("myText").value;
   var firstname=document.getElementById("firstname").innerHTML
  console.log('main' + maintext);
    var post=firebase.database().ref('post');
var newMessageRef=post.push();
      newMessageRef.set({firstname:firstname,
      post:maintext, });

  }


  var postref=firebase.database().ref('post');
  postref.on('value',fetchdata,errdata);


  function fetchdata(data){
    var p=data.val()
    var keys=Object.keys(p);
    for(var i=0;i<keys.length;i++){
    var k=keys[i];
    var post=p[k].post
    var name=p[k].firstname;
    console.log(post,name);
    var key = Object.keys(p[k]);

  }
  document.getElementById("view").innerHTML += ('<div class="newpost">'+post+'<div style="text-align:right"> - '+name +'</div></div>');

}



function logout(){
  firebase.auth().signOut();
window.location="index.html"
}
