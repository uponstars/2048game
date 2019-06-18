var board = new Array();
$(function(){
    newgame();
});

function newgame() {
    //初始化棋盘格
    init();
    //
}

function init() {
    for (var i = 0; i < 4; i++) {
        //定义一个二维数组
        board[i] = new Array();
        for (var j = 0; i < 4; j++) {
            //初始化小格子的值为0
            board[i][j] = 0;
            //获取小格子的id
            var gridCell = $("#grid-cell-" + i + "-" + j);
            //通过getPosTop()方法设置每个格子距顶端的距离
            gridCell.css("top", getPosTop(i, j));
            //通过getPosLeft()方法设置每个格子距左端的距离
            gridCell.css("left", getPosLeft(i, j));
        }
    }
}
