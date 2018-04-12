function login(){

var valor = document.getElementById('correo').value;
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
      document.getElementById("myForm").submit(); 

  } else {

   alert("Su correo es invalido");

  }
}

function rrss(){
   location.href = "login.html";
}