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
            if (moveUp()) {
                generateOneNumber();
                isGameover();
            }
            break;
        case 39://right
            if (moveRight()) {
                generateOneNumber();
                isGameover();
            }
            break;
        case 40://down
            if (moveDown()) {
                generateOneNumber();
                isGameover();
            }
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
                        continue;
                    } else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, k, j, board) && !hasConflicted[i][k]) {
                        //才能向左移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        hasConflicted[i][k] = true;
                        //add score
                        score += board[i][k];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
}

function moveUp() {
    //判断是否可以向上移动
    if (!canMoveUp(board)) {
        return false;
    }
    //完成向上移动的逻辑
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && noBlokHorizontalRow(j, k, i, board)) {
                        //才能向上移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] == board[i][j] && noBlokHorizontalRow(j, k, i, board) && !hasConflicted[k][j]){
                        //才能向上移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        hasConflicted[k][j] = true;
                        //add score
                        score += board[k][j];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
}

function moveRight() {
    //判断是否可以向右移动
    if (!canMoveRight(board)) {
        return false;
    }
    //完成向右移动的逻辑
    for (var i = 3; i >= 0; i--) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && noBlokHorizontalCol(i, j, k, board)) {
                        //才能向上移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, j, k, board) && !hasConflicted[i][k]){
                        //才能向上移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        hasConflicted[i][k] = true;
                        //add score
                        score += board[i][k];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
}

function moveDown() {
    //判断是否可以向下移动
    if (!canMoveDown(board)) {
        return false;
    }
    //完成向下移动的逻辑
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] == 0 && noBlokHorizontalRow(j, i, k, board)) {
                        //才能向上移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] == board[i][j] && noBlokHorizontalRow(j, i, k, board) && !hasConflicted[k][j]){
                        //才能向上移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        hasConflicted[k][j] = true;
                        //add score
                        score += board[k][j];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
}

function isGameover () {
    if (noSpace(board) && noMove(board)) {
        gameover();
    }
}

function gameover() {
    alert("gameover!");
}
