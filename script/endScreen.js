 $(function(){
     // HTTP GET Parameter 取得
   var arg = new Object;
    var pair=location.search.substring(1).split('&');
    for(var i=0;pair[i];i++) {
        var kv = pair[i].split('=');
        arg[kv[0]]=kv[1];
    }
    
    var NOCA = parseInt(arg["NOCA"],10);
    var NNOCA = parseInt(arg["NNOCA"],10);
    var CAR = Math.round((NOCA/(NOCA+NNOCA))*100);
        $(".end-title").text("結果発表");
        $(".NOCA").html("正解数:"+NOCA);
        $(".NNOCA").html("不正解数:"+NNOCA);
        $(".CAR").html("正解率:"+CAR+"％");

    $(".btn-end").on("click", function() {
        location.href = "./../index.html";
    });
 });
