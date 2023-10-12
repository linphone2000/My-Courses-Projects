const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us21.api.mailchimp.com/3.0/lists/2b755aae47";
  const options = {
    method: "POST",
    auth: "linphone2000:13198f83705324c2ad19a53dc8df0d39-us21",
  }
  const request = https.request(url, options, function (response) {
    if(response.statusCode === 200){
      res.sendFile(__dirname+"/success.html")
    }else{
      res.sendFile(__dirname+"/failure.html")
    }
    response.on("data",function(data){
        console.log(JSON.parse(data));
    })
  });
  request.write(jsonData);
  request.end();
});

app.post("/failure",function (req,res) { 
  res.redirect("/");
 })

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3001, function () {
  console.log("Server is running on port 3001");
});
