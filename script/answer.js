// クイズデータリスト
var answerList;

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

    var getAnswerDataHandler = function(data) {
        answerList = data.answerList;
        setAnswerData(index);
        console.log("test");

        $(".btn-nextQuiz").on("click", function() {
            // TODO チェックボックスの判定
            console.log("test");
            window.parent.nextButton();
        });
    };
    $.get("./../database/answer.json", { ts: new Date().getTime() }, getAnswerDataHandler, "json");
});

function setAnswerData(index) {
    if (index > ansewrList.length-1) {
        return false;
    }

    var answerData = answerList[index];
    console.log(answerData.desc);
    setAnswerInfo(answerData.desc);
    return true;
}
function setAnswerInfo(desc) {
    console.log("test");
    $(".answer-desc").html(desc);
}
