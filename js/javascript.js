function signup(e) {
   event.preventDefault();

   var inputs = document.querySelectorAll("#username,#password,#cf-password");
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var cf_password = document.getElementById("cf-password").value;
   var user = {
      username: username,
      password: password,
      cf_password: cf_password,
   };
   if (password == cf_password) {
      var json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert("Sign Up Success!");
      window.location.href = "index.html";
   } else {
      alert("Sign Up Failed!");
      inputs.forEach((input) => {
         input.value = "";
      });
   }
}

function login(e) {
   event.preventDefault();

   var inputs = document.querySelectorAll("#username,#password");
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var user = localStorage.getItem(username);
   var data = JSON.parse(user);
   if (user == null) {
      alert(
         "Account does not exist!\nPlease register an account, then login again!"
      );
      window.location.href = "signup.html";
   } else if ((username = data.username && password == data.password)) {
      alert("Logged in successfully!");
      window.location.href = "https://linktr.ee/hohien";
   } else {
      alert("Login failed!");
      inputs.forEach((input) => {
         input.value = "";
      });
   }
}
