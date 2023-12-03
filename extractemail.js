// Regular expression to match email addresses
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

// Extracting email addresses from the HTML code
const extractEmails = () => {
  const htmlContent = document.documentElement.outerHTML;
  const emails = htmlContent.match(emailRegex);
  return emails ? [...new Set(emails)] : [];
};

// Function to copy text to clipboard
const copyToClipboard = text => {
  const dummyTextArea = document.createElement('textarea');
  dummyTextArea.value = text;
  document.body.appendChild(dummyTextArea);
  dummyTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(dummyTextArea);
};

// Printing and copying the extracted email addresses
const printAndCopyEmails = () => {
  const emails = extractEmails();
  if (emails.length > 0) {
    const emailsText = emails.join('\n'); // Concatenate emails with new lines
    console.log('Extracted Email Addresses:');
    console.log(emailsText); // Print emails to console
    copyToClipboard(emailsText); // Copy emails to clipboard
    console.log('Emails copied to clipboard!');
  } else {
    console.log('No email addresses found.');
  }
};

// Execute the function to print and copy emails
printAndCopyEmails();
