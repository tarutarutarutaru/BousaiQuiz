// 現在表示している問題の正解の番号
var ansIndex = -1;

$(function (){
    
});

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

        if (i%2 == 0){
            $(".ans-holder").append(
                "<div class='row ans-row-" + ansRow + "'>" +
                "</div>"
            );
        }

        $(".row ans-row-" + ansRow).append(
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