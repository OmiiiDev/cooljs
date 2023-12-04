// Get all anchor (a) elements on the page
const links = document.querySelectorAll('a');

// Filter and extract MP4 links
const mp4Links = Array.from(links)
  .filter(link => link.href.toLowerCase().endsWith('.mp4'))
  .map(link => link.href);

// Display MP4 links
console.log('MP4 Links found on the page:');
console.log(mp4Links);

// Manually copy MP4 links from the console
// Copy and paste the displayed links as needed
