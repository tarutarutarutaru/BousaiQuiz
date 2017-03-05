//正解数
var NOCA = 0;
//不正解数
var NNOCA = 0;
//正解率
var CAR = 0;
   var arg = new Object;
    var pair=location.search.substring(1).split('&');
    for(var i=0;pair[i];i++) {
        var kv = pair[i].split('=');
        arg[kv[0]]=kv[1];
    }
    NOCA = parseInt(arg["NOCA"],10);
    NNOCA = parseInt(arg["NNOCA"],10);
    CAR = (NOCA+NNOCA)/NOCA;

$(".NOCA").html("正解数:"+NOCA);
$(".NNOCA").html("不正解数:"+NNOCA);
$(".CAR").html("正解率:"+CAR);