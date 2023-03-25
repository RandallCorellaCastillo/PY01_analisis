//=========================================Globals values====================================================
/**
 * @type {String}
 * Value of null values in matrix.
 */
x = "";

/**
 * @type {int[][]}
 * Main matrix.
 * **/
sudoMatrix = 
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [x, x, x, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, x, x, x],
  [x, x, x, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, x, x, x],
  [x, x, x, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, x, x, x],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
//=========================================End Globals values====================================================


/**
 * @Abstract Clear the matrix.
 */
function clearMatrix() {
  x = "";
  sudoMatrix = 
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [x, x, x, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, x, x, x],
    [x, x, x, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, x, x, x],
    [x, x, x, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, x, x, x],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, x, x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
}

/**
 * @abstract search if n is a valid value in this position.
 * @param x : values of the row.
 * @param y : values of the column.
 * @param n : index of the position insert value.
 * @param mx : max value of x.
 * @param my : max value of y.
 * @param n : number to insert.
 */
function insertValueXY(x, y, mx, my, n) { 
  switchValue = true;
  //=====================================================
  eq = 0;//value of substract.
  for (let i = 0; i < 9; i++) { //iter the row.
    if(mx < x + i) {eq = 9;} // if the row pass the max X. Reset the x.
    if(sudoMatrix[x + i - eq][y] == n) {switchValue = false;} //if n is in row. put on switch.
  }
  //======================================================
  eq = 0; //reset the value of subs.
  for (let i = 0; i < 9; i++) { //iter the col
    if (my < y) {eq = 9;} //if the column pass the max Y. Reset y.
    if (sudoMatrix[x][y + i - eq] == n) {switchValue = false;} //if n is in column. put on switch.
  }
  //======================================================
  if (switchValue) {sudoMatrix[x][y] = n; return 1;} // if can put n.
  return -1;//if fail.
}

/**
 * @abstract fill the 9x9 on the matrix.
 * @param initX : start X index to fill.
 * @param initY : start Y index to fill.
 */
function fillM(initX, initY) {
  count = 0;
  while (!ifFill(initX, initY)) {//if the matrix is not full.
    YrandomIndex = Math.floor(Math.random() * 9) + initX;
    XrandomIndex = Math.floor(Math.random() * 9) + initY;
    randomValue = Math.floor(Math.random() * 9) + 1; // 1-9
    //console.log("Cords: " + XrandomIndex + YrandomIndex + "==== n: " + randomValue);
    insertValueXY(XrandomIndex, YrandomIndex, initX + 9, initY + 9, randomValue);
    count++;
  }
  console.log("count: " + count);
  return -1;
}

/**
 * @abstract check status of the matrix.
 * @param initX : start X index to fill.
 * @param initY : start Y index to fill.
 */
function ifFill(initX, initY) {
  switchValue = true; 
  for (let i = initX; i < initX + 9; i++) { // row.
    for (let j = initY; j < initY + 9; j++) { //col.
      if(sudoMatrix[i][j] == 0) {switchValue = false;}
    }
  }
  return switchValue;
}


function printM() {
  //for (let i = 0; i < 9; i++) {insertValueXY(5 + i, 6, 14, 14, i);}
  //for (let i = 0; i < 10; i++) {insertValueXY(6, 5 + i, 14, 14, i);} 
  fillM(6, 6);
  fillM(0, 0);
  //fillM(0, 12); 
  //fillM(12, 0);
  //fillM(12, 12);
  //ifFill(6, 6);
  sudoMatrix[0][12] = "L"
  //console.log("finish iter");

  var res;
  for (let i = 0; i < 21; i++) {
    res+= "\n";
    for (let j = 0; j < 21; j++) {
      if(sudoMatrix[i][j] == "") {
        res += 0;
      } else {
        res += sudoMatrix[i][j];
      }
      res += " "
    }
  }
  console.log(res);
  
}