var step = 1;
var stepImageWidth = 24;
var intervalId = setInterval(function() {
    var container = document.querySelector('.container');
    var cards = document.getElementById("cards");
    var card = document.querySelector(".card");
    var contactForm = document.querySelector(".contactContainer");
    var stepImage1 = document.getElementById("stepImage1");
    var stepImage2 = document.getElementById("stepImage2");
    var steps = document.querySelector(".steps");

    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    var card4 = document.getElementById("card4");

    var pageNav = document.getElementById("pageNav");

    var contactFormWidth = contactForm.offsetWidth - 80;
    stepImage1.style.backgroundSize = contactFormWidth + "px";
    stepImage2.style.backgroundSize = contactFormWidth + "px";

    var stepsHeight = contactFormWidth/368;
    stepsHeight *= 70;
    steps.style.height = stepsHeight + "px";

    var containerwidth = container.offsetWidth - 130;
    var cardWidth = card.offsetWidth + 20;
    var cardNum = parseInt(containerwidth/cardWidth);
    var width = cardNum * cardWidth;
    
    if(cardNum <= 1) {
        card2.style.display = "none";
        card3.style.display = "none";
        card4.style.display = "none";

        pageNav.style.display = "block";
    } else {
        card2.style.display = "inline-block";
        card3.style.display = "inline-block";
        card4.style.display = "inline-block";

        pageNav.style.display = "none";
    }
    if(cardNum >= 1) {
        cards.style.maxWidth = width + "px";
    }
  }, 50);

  var moveStepImage = setInterval(function() {
    var stepImage = document.getElementById("stepImage2");
    if(step == 1) {
        if(stepImageWidth > 24) {
            stepImageWidth--;
        } else if(stepImageWidth < 24) {
            stepImageWidth++;
        }
    } else if(step == 2) {
        if(stepImageWidth > 47) {
            stepImageWidth--;
        } else if(stepImageWidth < 47) {
            stepImageWidth++;
        }
    } else if(step == 3) {
        if(stepImageWidth > 75) {
            stepImageWidth--;
        } else if(stepImageWidth < 75) {
            stepImageWidth++;
        }
    } else if(step == 4) {
        if(stepImageWidth > 100) {
            stepImageWidth--;
        } else if(stepImageWidth < 100) {
            stepImageWidth++;
        }
    }
    stepImage.style.width = stepImageWidth + "%";
  }, 7);

  function setStep(previousStep, nextStep) {
    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");
    var step4 = document.getElementById("step4");

    step1.style.display="none";
    step2.style.display="none";
    step3.style.display="none";
    step4.style.display="none";

    if(nextStep == 1) {
        step1.style.display = "block";
    } else if(nextStep == 2) {
        step2.style.display = "block";
    } else if(nextStep == 3) {
        step3.style.display = "block";
    } else {
        step4.style.display = "block";
    }
}

function nextStep() {
    if(step != 4) {
        setStep(step++, step);
    }
}

function movePreviousStep (previousStep) {
    if(previousStep < step) {
        setStep(step, previousStep);
        step = previousStep;
    }
}