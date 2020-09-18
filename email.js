let nodemailer = require("nodemailer");

// Static folder
// app.use("/public", express.static(path.join(__dirname, "public")));

var transporter = nodemailer.createTransport({
  host: "http://localhost:8080",
  port: 587,
  secure: false,
  service: "Gmail",
  auth: {
    user: "taxiinvaranasiii@gmail.com",
    pass: "Abhinav@123",
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

module.exports = (app) => {
  app.post("/message", (req, res, next) => {
    // var name = req.body.name;
    // var phone = req.body.phone;
    // var email = req.body.email;
    console.log(req.body);
    const { name, phone, email } = req.body;
    console.log(name, phone);
    var content = `Name: ${name} \n Phone: ${phone} \n Email: ${email}`;

    var mail = {
      from: "taxiinvaranasiii@gmail.com",
      to: "mail2shruti.ag@gmail.com",
      subject: "Taxi in Varanasi",
      html: content,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
        });
        console.log(err);
      } else {
        res.json({
          status: "success",
        });
      }
    });
  });
};
