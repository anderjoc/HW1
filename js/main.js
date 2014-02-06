// Main Script
h = new Header;
document.getElementById('header').appendChild(h.el);

f = new Footer;
document.getElementById('footer').appendChild(f.el);

c = new Clock;
document.getElementById('clock').appendChild(c.el);

var timeoutLength = 10000
setTimeout(timeout,timeoutLength);

