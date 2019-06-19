//keydown事件表示键盘被按下
$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37://left
            if (moveLeft()) {
                generateOneNumber();
                isGameover();
            }
            break;
        case 38://up
            break;
        case 39://right
            break;
        case 40://down
            break;
    }
});

function moveLeft() {
    //判断是否可以向左移动
    if (!canMoveLeft(board)) {
        return false;
    }
    //完成向左移动的逻辑
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                //向左移动的逻辑
                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlokHorizontalCol(i, k, j, board)) {
                        //才能向左移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, k, j, board)) {
                        //才能向左移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
}
