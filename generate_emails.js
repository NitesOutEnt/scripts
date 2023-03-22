const admin = require('firebase-admin');
const XLSX = require('xlsx');
const serviceAccount = require('./nitesout-website-firebase-adminsdk-f3rw3-f66b62e1a1.json'); // replace with your own service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const collectionRef = db.collection('waitlist');

// Retrieve all documents in the 'waitlist' collection
collectionRef.get().then((snapshot) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([['Email']]);
  
    // Loop through each document in the collection and add its email field to the worksheet
    const emails = snapshot.docs.map((doc) => [doc.data().email]);
    XLSX.utils.sheet_add_aoa(worksheet, emails, { origin: -1 });
  
    // Add the worksheet to the workbook and write it to a file in the same directory as this script
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Waitlist Emails');
    XLSX.writeFile(workbook, './waitlist_emails.xlsx');
  });
