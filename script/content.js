$(function() {
    console.log("test");
    location.href = "./../page/quiz.html?index="+"3";
    $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + "3");
    $("#iframe-quiz").attr("src","./../page/quiz.html?index=" + "3");
});

function nextButton() {
    return alert("子供から呼ばれました");
}