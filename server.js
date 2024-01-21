const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/verify', (req, res) => {
    const certificateNumber = req.query.certificateNumber;
    const certificates = JSON.parse(fs.readFileSync('certificate.json', 'utf-8'));

    const isValid = certificates.includes(certificateNumber);

    res.json({ valid: isValid });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
