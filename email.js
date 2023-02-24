/email validation/

function validateEmail(inputText){

  var gmail=/^\+([./-]+\w)*@\w+([\.-]?\w+)*(\.\w{4,5})+\$/;

if(inputText.value.match(gmail)){
  alert("valid email id");
  document.form1.text1.focus();
  return true;
}else{
  alert("invalid email id");
  document.form1.text1.focus();
  return false;
}
}
validateEmail("test01*gmail.com");


// function validateEmail(text){
//   if(/^\+([./-]+\w)*@\w+([\.-]?\w+)*(\.\w{4,5})+\$/.test(myForm.emailAddres.value)){
//     alert("valid emal id");
//     return true;
//   }
//   alert("invalid email id");
//   return false;
// }
// validateEmail("tet01*gmail.com");