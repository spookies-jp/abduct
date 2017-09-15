// スマホはabout pageに遷移
var u = window.navigator.userAgent.toLowerCase();
if((u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1)
{
    window.location.replace("./about.html");
}

window.onload = function(){

    // canvas サイズ
    var gameContainer = document.getElementById("gameContainer");

    var canvas = document.getElementById("#canvas");
    
    resize();

    window.addEventListener("resize", resize);

    // unity 側でcanvasサイズが上書きされるのでそのタイミングを監視する
    // https://developer.mozilla.org/ja/docs/Web/API/MutationObserver
    var mo = new MutationObserver(function(mutationRecords){

        // 上書き以前にwinodwサイズに変更されることがあるのでそれを除く
        if(canvas.width != window.innerWidth)
        {
            
            // 監視をやめる
            mo.disconnect();

            resize();

        }

    });

    // canvas要素に対して監視実行
    mo.observe(canvas, {attributes: true});

    function resize(){

        canvas.width = window.innerWidth;

        gameContainer.style.width = window.innerWidth + "px";

        canvas.height = window.innerHeight;

        gameContainer.style.height = window.innerHeight + "px";

    }

}