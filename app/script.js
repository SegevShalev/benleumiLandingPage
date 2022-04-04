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
    Host: "smtp.gmail.com",
    Username : "binleumidata@gmail.com",
    Password :"Q12345678!",
    To: "binleumidata@gmail.com",
    From :"binleumidata@gmail.com",
    Subject: "hello",
    Body: data,
    
  }).then(() => alert("message"));
}
/*  SecureToken : "9f4c10a4-7f9a-4880-baaf-61ba7cdbae72",
    To: "binleumidata@gmail.com",
    From: "segevshalev@gmail.com",
    Subject: "hello",
    Body: data,
     */
