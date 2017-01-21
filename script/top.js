$(function() {
    $(".btn-start").on("click", function() {
        location.href = "./../page/quiz.html";
        $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + "3")
    });
});
