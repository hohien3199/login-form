function signup(e) {
   event.preventDefault();

   var inputs = document.querySelectorAll("#username,#password,#cf-password");
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var cf_password = document.getElementById("cf-password").value;
   var userLocal = localStorage.getItem(username);
   var data = JSON.parse(userLocal);
   var user = {
      username: username,
      password: password,
   };

   if (userLocal != null) {
      alert("Username already exits!");
      document.getElementById("username").focus();
   } else if (password == cf_password) {
      var json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert("Sign up success!");
   } else {
      alert("Sign up failed!");
      document.getElementById("username").focus();
   }
   inputs.forEach((input) => {
      input.value = "";
   });
}

function login(e) {
   event.preventDefault();

   var inputs = document.querySelectorAll("#username,#password");
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var user = localStorage.getItem(username);
   var data = JSON.parse(user);
   if (user == null) {
      alert("Wrong username or password!");
      document.getElementById("username").focus();
   } else if ((username = data.username && password == data.password)) {
      alert("Logged in successfully!");
      window.location.href = "https://linktr.ee/hohien";
   } else {
      alert("Login failed!");
      document.getElementById("username").focus();
   }
   inputs.forEach((input) => {
      input.value = "";
   });
}
