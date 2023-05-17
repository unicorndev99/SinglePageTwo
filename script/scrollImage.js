var right = -2000;
var imageTemp = 0;

function getBodyWdith() {
    setTimeout(() => {
        right = document.body.clientWidth;
        right *= -1;
    }, 100);
}

getBodyWdith();

var scrollImage = setInterval(function() {
    var logos = document.getElementsByClassName("scrollImages");
    right += 0.3;
    logos[0].style.right = right + 'px';
}, 1);

var addImage = setInterval(function() {
    var image1 = document.getElementById("scrollImage1");
    var image2 = document.getElementById("scrollImage2");
    var image3 = document.getElementById("scrollImage3");
    var image4 = document.getElementById("scrollImage4");
    var image5 = document.getElementById("scrollImage5");
    var image6 = document.getElementById("scrollImage6");
    var image7 = document.getElementById("scrollImage7");
    var image8 = document.getElementById("scrollImage8");

    var logos = document.getElementsByClassName("scrollImages");

    if(imageTemp == 0)
        var image = image1.cloneNode(true);
    else if(imageTemp == 1)
        var image = image2.cloneNode(true);
    else if(imageTemp == 2)
        var image = image3.cloneNode(true);
    else if(imageTemp == 3)
        var image = image4.cloneNode(true);
    else if(imageTemp == 4)
        var image = image5.cloneNode(true);
    else if(imageTemp == 5)
        var image = image6.cloneNode(true);
    else if(imageTemp == 6)
        var image = image7.cloneNode(true);
    else if(imageTemp == 7)
        var image = image8.cloneNode(true);

    imageTemp++;
    if(imageTemp > 7) {
        imageTemp = 0;
    }

    image.style.display = "block";
    logos[0].appendChild(image);
}, 500);