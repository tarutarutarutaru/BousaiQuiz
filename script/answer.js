// クイズデータリスト
var answerDesc;

$(function () {
    // HTTP GET Parameter 取得
   var arg = new Object;
    var pair=location.search.substring(1).split('&');
    for(var i=0;pair[i];i++) {
        var kv = pair[i].split('=');
        arg[kv[0]]=kv[1];
    }
    
    // 表示したい問題番号
    var index = parseInt(arg["index"], 10);
    var ansIndex = parseInt(arg["ansIndex"],10);
    var getAnswerDataHandler = function(data) {
        answerDesc = data.quizList.map(function(quizData) {
            return quizData.ansDesc;
        })
        setAnswerData(index);

        $(".btn-nextQuiz").on("click", function() {
            // TODO チェックボックスの判定
            console.log("test");
            window.parent.nextButton();
        });
    };
    $.get("./../database/quiz.json", { ts: new Date().getTime() }, getAnswerDataHandler, "json");
});

function setAnswerData(index) {
    if (index > answerDesc.length - 1) {
        return false;
    }

    setAnswerInfo(answerDesc[index]);
    return true;
}

function setAnswerInfo(desc) {
    
    $(".answer-desc").html(desc);
}
