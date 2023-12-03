function copyPageHTMLToClipboard() {
  // Get the HTML content of the current page
  const htmlContent = document.documentElement.outerHTML;

  // Create a textarea element to temporarily hold the HTML content
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = htmlContent;

  // Append the textarea to the document body
  document.body.appendChild(tempTextArea);

  // Select the textarea content
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected content to the clipboard
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);

  // Alert or indicate success
  alert('HTML content copied to clipboard!');
}

// Call the function to copy HTML content to clipboard
copyPageHTMLToClipboard();
