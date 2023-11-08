const express = require('express');
const cors = require('cors');

const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:1234',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

// Middleware
app.use(express.static('src'));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/partials/booking-modal.html');
});

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'pop.meta.ua',
    port: 995,
    secure: true,
    auth: {
      user: 'nodemailer.sheshory@meta.ua',
      pass: 'ChaLet2023',
    },
  });

  const emailMessage = `
  Name: ${req.body.name}
  Tel: ${req.body.tel}
  Email: ${req.body.email}
  Start Date: ${req.body.start}
  End Date: ${req.body.end}
  Comment: ${req.body.comment}
`;

  console.log(emailMessage);

  const mailOptions = {
    from: req.body.email,
    to: 'nodemailer.sheshory@meta.ua',
    subject: 'New Booking Form Submission',
    text: emailMessage,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
