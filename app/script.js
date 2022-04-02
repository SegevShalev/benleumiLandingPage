function sendData() {
  let data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    branch: document.getElementById("branch").value,
    department: document.getElementById("department").value,
  };
  console.log(Email);
  data = JSON.stringify(data);
  Email.send({
    SecureToken : "9f4c10a4-7f9a-4880-baaf-61ba7cdbae72",
    To: "binleumidata@gmail.com",
    From: "segevshalev@gmail.com",
    Subject: "hello",
    Body: data,
    /* SecureToken:"15f9a768-d87a-4ece-b068-7e8189773461", */
  }).then(() => alert("message"));
}
/* 15f9a768-d87a-4ece-b068-7e8189773461 */
