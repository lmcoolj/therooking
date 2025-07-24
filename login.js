function checkCode(){
  var code = document.getElementById("Code").value;
  if (code === "dev_wufes" || code === "dev_kookoo") {
    window.location.href = "rookhub.html";
  } else if (code !== "") {
    alert("Invalid code! Please try again.");
  }
  // If code is empty, do nothing
}
