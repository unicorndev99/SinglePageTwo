var step = 1;
var previousStep = 1;

var percent = 0;
var percent2 = 100;
i = 1;
j = 1;
var flag = 0;
var temp = 0;
var flag1 = 0;
var changePageNav = setInterval(function() {
    var elements = document.getElementsByClassName("pageNavRadio");
    var body = document.body;
    for(var i = 0; i< elements.length ; i++) {
        elements[i].disabled = true;
    }
    if(body.offsetWidth < 975) {
        flag1++;
        if(flag1 == 970) {
            elements[temp++].checked = false;
            if(temp>3)
                temp = 0;
            elements[temp].checked = true;        
            flag1 = 0;    
        }
    } else {
        flag1 = 0;
    }
}, 1);

var moveStepImage = setInterval(function() {
    var elements  = document.getElementsByClassName("stepMovie");
    var stepValues  = document.getElementsByClassName("stepValue");
    if(i < j) {

        if( i % 2 == 0) {
            elements[i].style.backgroundSize = percent + "% 100%";
                stepValues[i/2].style.color = "white";
        } else {
            elements[i].style.width = percent + "%";
        }

        percent += 10;

        if(percent > 100) {
            percent = 0;
            i++;
        }
        flag = 1;
    }
    if(i == j && flag == 1) {
        if(i%2 == 1) {
            elements[i].style.width = percent + "%";
            if(percent > 50) {
                percent = 0;
                flag = 0;
            }
        }
        else { 
            elements[i].style.backgroundSize = percent + "% 100%";
            if(percent > 100) {
                percent = 0;
                flag = 0;
            }
            stepValues[i/2].style.color = "white";
        }
        percent += 10;
    }
    if(i > j) {

        if( i % 2 == 0) {
            elements[i].style.backgroundSize = percent2 + "% 100%";
            if(percent2 < 60) {
                stepValues[i/2].style.color = "#3F4045";
            }
        } else {
            elements[i].style.width = percent2 + "%";
        }

        percent2 -= 10;

        if(percent2 <0) {
            percent2 = 100;
            i--;
        }
        flag = 2;
    }
    if(i == j && flag == 2) {
        elements[i].style.width = percent2 + "%";
        percent2 -= 10;
        if(percent2 < 50) {
            percent2 = 100;
            flag = 0;
        }
    }
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
        i = step*2-1;
        j = i+2;
        if(j > 6) {
            j = 6;
        }
        if(i > 6) {
            i = 6;
        }
        setStep(step++, step);
    }
}

function movePreviousStep (previous) {
    if(previous < step) {
        i = step*2-1;
        j = previous*2-1;
        if(j > 6) {
            j = 6;
        }
        if(i > 6) {
            i = 6;
        }
        setStep(step, previous);
        step = previous;
    }
}