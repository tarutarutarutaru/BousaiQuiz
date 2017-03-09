// クイズデータリスト
var answerDesc;
var correctAnswer; //正しい答え
var playerAnswer;  //playerの洗濯した答え

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
    correctAnswer = parseInt(arg["ansIndex"],10);
    playerAnswer = parseInt(arg["counter"],10);
    var getAnswerDataHandler = function(data) {
        answerDesc = data.quizList.map(function(quizData) {
            return quizData.ansDesc;
        })
        setAnswerData(index);

        $(".btn-nextQuiz").on("click", function() {
            // TODO チェックボックスの判定
            console.log("test");
             if (index > answerDesc.length - 2) {
                 window.parent.drawEndScreen();
                return;
             }else{
                 window.parent.nextButton();
             }
        });
    };
    $.get("./../database/quiz.json", { ts: new Date().getTime() }, getAnswerDataHandler, "json");
});

function setAnswerData(index) {
    setAnswerInfo(answerDesc[index]);
    return true;
}

function setAnswerInfo(desc) {
    if(correctAnswer == playerAnswer){
        $(".answer-title").html("正解");
        document.getElementById("ca").play();
       window.parent.NOCA++;
    }else{
        $(".answer-title").html("不正解");
        document.getElementById("nca").play();
        window.parent.NNOCA++;
    }
    $(".answer-desc").html(desc);
}
