// クイズデータリスト
var quizList;

// 現在のクイズ番号
var quizIndex = 0;
// 現在表示している問題の正解の番号
var ansIndex = -1;

$(function () {
    // HTTP GET Parameter 取得
    var arg = new Object;
    var pair=location.search.substring(1).split('&');
    for(var i=0;pair[i];i++) {
        var kv = pair[i].split('=');
        arg[kv[0]]=kv[1];
        console.log("test");
    }
    
    // 表示したい問題番号
    var index = parseInt(arg["index"], 10);
    index=2;
    console.log(arg["index"]);

    var getQuizDataHandler = function(data) {
        quizList = data.quizList;
        console.log(index);
        setQuizData(index);

        $(".btn-next").on("click", function() {
            // TODO チェックボックスの判定
            console.log(parent.whidow);
            parent.window.nextButton();
        });
    };
    $.get("./../database/quiz.json", { ts: new Date().getTime() }, getQuizDataHandler, "json");
});

/**
 * クイズデータを番号からセット
 * @param {number} index - 問題番号 0 init
 * @return {bool} 問題をセットできたか
 */
function setQuizData(index) {
    console.log(index);
    if (index > quizList.length-1) {
        return false;
    }

    var quizData = quizList[index];
    console.log(quizData);
    setQuizInfo(index, quizData.desc);
    setAnsList(quizData.ansList);
    return true;
}

function setQuizInfo(index, desc) {
    $(".quiz-title").html("Q" + (index+1));
    $(".quiz-desc").html(desc);
}

/**
 * 答えのリストを画面に反映
 * @param {object} ansList - 答えのリスト
 */
function setAnsList(ansList) {
    $(".ans-holder").html("");

    for (var i = 0; i < ansList.length; i++) {
        var ansObj = ansList[i];
        var ansRow = ((i-i%2)/2);

        // 正解の番号を記録
        if (ansObj.ans == true){
            ansIndex = i;
        }

        // 横並びレイアウトを挿入
        if (i%2 == 0) {
            $(".ans-holder").append(
                "<div class='row ans-row-" + ansRow + "'>" +
                "</div>"
            );
        }

        // 選択肢を挿入
        $(".ans-row-" + ansRow).append(
            "<div class='col-md-6'>" +
            "<div class='checkbox ans-0'>" +
            "<label>" +
            "<input type='checkbox'/>" + ansObj.text +
            "</label>" +
            "</div>" +
            "</div>"
        );
    }

$(".btn-next").on("click", function() {
    
});
}