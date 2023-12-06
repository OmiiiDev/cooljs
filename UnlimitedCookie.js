// Get the cookie
var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)example_cookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");

// Set the cookie with an extended expiration date
document.cookie = "example_cookie=" + cookieValue + "; expires=" + new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000)).toUTCString() + "; path=/";
