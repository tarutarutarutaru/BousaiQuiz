$(function() {
    $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + "0");
});
var QuizIndex = 0;
function nextButton() {
    QuizIndex++;
    $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + QuizIndex);
}