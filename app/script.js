function sendData() {
  let data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    branch: document.getElementById("branch").value,
    department: document.getElementById("department").value,
  };
  console.log(data);

  data = JSON.stringify(data);
  // Email.send({
  //   Host: "smtp.elasticmail.com",
  //   Username: "binleumidata@gmail.com",
  //   Password: "Q12345678!",
  //   To: "binleumidata@gmail.com",
  //   From: "binleumidata@gmail.com",
  //   Subject: "hello",
  //   Body: data,
  // }).then(() => alert("message"));
  console.log(data);
  Email.send({
    SecureToken: "9a26d507-d8f0-415a-a764-413deaaf4684",
    To: "binleumidata@gmail.com",
    From: "binleumidata@gmail.com",
    Subject: "This is the subject",
    Body: data,
  })
    .then((message) => alert(message))
    .then(() => location.reload());
}
