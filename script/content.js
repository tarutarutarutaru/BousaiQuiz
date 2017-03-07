$(function() {
    $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + "0");
});
var QuizIndex = 0;
var NOCA = 0;
var NNOCA = 0;
function nextButton() {
    QuizIndex++;
    $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + QuizIndex);
}
function drawEndScreen(){
    location.href = "./../page/endScreen.html?" + $.param({NOCA: NOCA, NNOCA: NNOCA});
}