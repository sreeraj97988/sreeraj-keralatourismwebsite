let email = document.getElementById("email");
let password = document.getElementById("password")

function validation(){
 
   if(email.value ==""||password.value ==""){

    alert("field cannot be empty");
    return false;
   }  

   else{
       alert("validation is proper");
       return true;
   }

}