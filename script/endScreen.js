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
        $(".NOCA").html("正解(せいかい)したかず:"+NOCA);
        $(".NNOCA").html("間違(まちが)ったかず:"+NNOCA);
        $(".CAR").html("点数(てんすう):"+CAR+"点");

    $(".btn-end").on("click", function() {
        location.href = "./../index.html";
    });
 });
