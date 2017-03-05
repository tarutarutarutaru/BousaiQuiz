var NOCA;
var NNOCA;
$(function() {
    $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + "0");
});
var QuizIndex = 0;
function nextButton(NOCA,NNOCA) {
    QuizIndex++;
    NOCA += NOCA;
    NNOCA += NNOCA;
    $("#iframe-quiz").attr("src", "./../page/quiz.html?index=" + QuizIndex+"&NOCA="+NOCA+"&NNOCA="+NNOCA);
}
function EndScreen(NOCA,NNOCA){
    var arg = new Object;
    var pair=location.search.substring(1).split('&');
    for(var i=0;pair[i];i++) {
        var kv = pair[i].split('=');
        arg[kv[0]]=kv[1];
    }
    NOCA = parseInt(arg["NOCA"],10);
    NNOCA = parseInt(arg["NNOCA"],10);
    location.href = "./../page/End_screen.html?" + $.param({NOCA: NOCA, NNOCA: NNOCA});  
}