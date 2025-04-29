function send(){

     let email = document.getElementById("email").value;


     if(!email){

     }
     else{
          alert("Your message has been successfully sent!");
          
     }
     
}

function clearform(){

     document.getElementById("email").value = "";
     document.getElementById("text").value = "";
     document.getElementById("message").value = "";


     
}