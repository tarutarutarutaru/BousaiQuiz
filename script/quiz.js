var quizList;

// 現在表示している問題の正解の番号
var ansIndex = -1;

$(function () {
    var getQuizDataHandler = function(data) {
        quizList = data.quizList;
        setQuizData(0);
    };
    $.get("./../database/quiz.json", { ts: new Date().getTime() }, getQuizDataHandler, "json");
});

function setQuizData(index) {
    var quizData = quizList[index];
    setQuizInfo(index, quizData.desc);
    setAnsList(quizData.ansList);
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

        //　横並びレイアウトを挿入
        if (i%2 == 0) {
            $(".ans-holder").append(
                "<div class='row ans-row-" + ansRow + "'>" +
                "</div>"
            );
        }

        //　選択肢を挿入
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
}