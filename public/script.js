async function verifyCertificate() {
  const certificateNumber = document.getElementById('certificateNumber').value;

  if (!certificateNumber) {
      alert('Please enter a certificate number.');
      return;
  }

  try {
      const response = await fetch(`/verify?certificateNumber=${certificateNumber}`);
      const data = await response.json();

      if (data.valid) {
          document.getElementById('verificationResult').innerHTML = 'Certificate is valid!';
      } else {
          document.getElementById('verificationResult').innerHTML = 'Certificate is not valid.';
      }
  } catch (error) {
      console.error('Error verifying certificate:', error);
      alert('An error occurred while verifying the certificate.');
  }
}
