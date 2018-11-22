var myButton = document.querySelector('button');
var myWelcoming = document.querySelector('h3');
function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myWelcoming.textContent = 'Welcome at my site, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myWelcoming.textContent = 'Welcome at my personal blog page, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}