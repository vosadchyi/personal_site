var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/logo1.svg') {
      myImage.setAttribute ('src','img/logo2.svg');
    } else {
      myImage.setAttribute ('src','img/logo1.svg');
    }
}

var quote = document.getElementById("portfolio");
quote.onclick = function() {
    alert('Sorry, this part of a site is still under construction');
}

