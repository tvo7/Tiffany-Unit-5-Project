let submitButton = document.querySelector(".submit");
let result = document.querySelector(".result");
let image = document.querySelector(".image");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let answer5 = document.querySelector(".answer5");

submitButton.onclick = function() {
 let questionOneinput = document.querySelector(".question-one").value;
     let questionTwoinput = document.querySelector(".question-two").value;
    if (questionOneinput <= 3 && questionTwoinput === "Morning"){
        answer1.style.display = "block";
    } else if (questionOneinput <=3 && questionTwoinput === "Night"){
        answer3.style.display = "block";
    } else if (questionOneinput >4 && questionTwoinput === "Morning"){
        answer2.style.display = "block";
    } else if (questionOneinput >4 && questionTwoinput === "Night"){
    answer4.style.display = "block";
    } else {
    answer5.style.display = "block";
    }
};