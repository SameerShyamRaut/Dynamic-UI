
window.onload = function(){
    function emailAlert(){
        alert("Hi , I am Bhaskar \n\nEmail ID - maitybhaskar2015@gmail.com");

    }

    var emailId = document.getElementById("email");

    emailId.addEventListener ('click',emailAlert);
}