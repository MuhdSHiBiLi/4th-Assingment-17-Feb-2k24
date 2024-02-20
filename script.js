

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission, as we're handling it via JavaScript

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("clicked the login button");

    console.log("Username:", username);
    console.log("Password:", password);
  

    if (username.trim() === "" || username === null || password.trim() === "" || password === null) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the fields!",
          });
          
    }else if(username.trim() === "admin" && password.trim() != 12345 ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Password!",
          });
    }else if(username.trim() !== "admin" && password.trim() == 12345 ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Username!",
          });
    }else if(username.trim() !== "admin" && password.trim() != 12345 ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Username and Password!",
          });
    }else{
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your logged Succesfull",
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            redirectToMainPage()
          }, 2000);
    }
    
});

function redirectToMainPage() { 
    window.location.href = "home.html";
};



