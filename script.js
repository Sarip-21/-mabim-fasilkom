function login() {
  var done = 0;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "sarip" && password === "123") {
    if (confirm("Apakah anda ingin masuk?") == true) {
      window.location.href = "https://github.com/Sarip-21/-mabim-fasilkom";
    } else {
      alert("Login dibatalkan");
    }
  } else {
    if (done === 0) {
      alert("Username/Password salah");
    }
  }
}
