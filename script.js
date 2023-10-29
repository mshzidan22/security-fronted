function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://127.0.0.1:8080/login" , true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      var j = {
          "username":username,
          "password":password
      };
      xhr.send(JSON.stringify(j));
    // Perform your login logic here
    
    
  }

  function sendAuthorizationKey(code){
    var xhr = new XMLHttpRequest();
      xhr.open("post", "http://127.0.0.1:8080/login" , true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      var j = {
          "username":code,
          "password":code
      };
      xhr.send(JSON.stringify(j));
  }

  function loginWithGoogle() {
    // Perform Google authentication logic here
    console.log("Logging in with Google");
  }

  function loginWithGitHub() {
    // Perform GitHub authentication logic here
    console.log("Logging in with GitHub");
  }

  function loginWithFacebook() {
    // Perform Facebook authentication logic here
    console.log("Logging in with Facebook");
  }



 //impelcit flow
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    console.log(response)
    sendAuthorizationKey(response.credential)

  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "243791043025-rprf5saeidb00cmvg80g8p48l84dao1t",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "small" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }