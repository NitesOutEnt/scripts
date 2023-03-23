const XLSX = require('xlsx');
const nodemailer = require('nodemailer');

// Load the Excel file
const workbook = XLSX.readFile('./send_to.xlsx');

// Get the first sheet of the workbook
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Get the email addresses from column A
const emailAddresses = [];
for (let i = 1; ; i++) {
  const cellAddress = 'A' + i;
  const cell = sheet[cellAddress];
  if (!cell || !cell.v) {
    break; // stop reading when the cell is empty
  }
  emailAddresses.push(cell.v);
}

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'YOUR-EMAIL-HERE',
    pass: 'YOUR-APP-PASSWORD-HERE'
  }
});

// Send an email to each email address
for (const emailAddress of emailAddresses) {
  const mailOptions = {
    from: 'YOUR-EMAIL-HERE',
    to: emailAddress,
    subject: 'YOUR-SUBJECT-HERE',
    text: 'YOUR-MESSAGE-HERE'
  };

  // feedback
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Failed to send email to ${emailAddress}:`, error);
    } else {
      console.log(`Email sent to ${emailAddress}:`, info.response);
    }
  });
}
