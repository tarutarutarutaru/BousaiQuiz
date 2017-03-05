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
    }
    
    // 表示したい問題番号
    var index = parseInt(arg["index"], 10);

    var getQuizDataHandler = function(data) {
        quizList = data.quizList;
        setQuizData(index);

        $(".btn-next").on("click", function() {
            // TODO チェックボックスの判定
            var answers = document.getElementsByName("answers");
            var counter = "";
            for( var i=0,l=answers.length; l>i; i++ ) {
	            if( answers[i].checked ) {
		            counter += answers[i].value;
	            }
            }
            location.href = "./../page/answer.html?" + $.param({index: index, ansIndex: ansIndex+1, counter: counter});
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
    if (index > quizList.length-1) {
        return false;
    }

    var quizData = quizList[index];
    setQuizInfo(index, quizData.desc);
    setAnsList(quizData.ansList);
    return true;
}

/**
 * 問題の番号とタイトルを設定
 * @param {number} index - 問題番号 0 init
 * @param {string} desc - 問題説明
 */
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
            "<input type='checkbox' name='answers' value = "+(i+1)+" />" + ansObj.text +
            "</label>" +
            "</div>" +
            "</div>"
        );
    }
}