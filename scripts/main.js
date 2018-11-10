var myImage = document.querySelector('img');
var myheader = document.querySelector('h1');
var mybutton = document.querySelector('button');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo-huge.jpg') {
      myheader.textContent = 'But google is good!';
      myImage.setAttribute ('src','images/google.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-logo-huge.jpg');
      myheader.textContent = 'mozila is bad';
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is bad, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is bad, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
