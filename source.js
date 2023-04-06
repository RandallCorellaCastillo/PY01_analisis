//=========================================Globals values====================================================
/**
 * @type {String}
 * Value of null values in matrix.
 */
x = "";


/**
 * @type {int[][]}
 * matUR matrix.
 * **/
matUR = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]];

/**
 * @type {int[][]}
 * matUL matrix.
 * **/
matUL = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]];

/**
 * @type {int[][]}
 * matMid matrix.
 * **/
matMid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0]];

/**
 * @type {int[][]}
 * matBL matrix.
 * **/
matBL = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]];

/**
 * @type {int[][]}
 * matBR matrix.
 * **/
matBR = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]];

/**
 * @type {String}
 * id selected.
 */
id_selected = 0;

/**
 * @type {int[]}
 * possibles values.
 */
values = [1,2,3,4,5,6,7,8,9];  

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
//=========================================End Globals values====================================================


/**
 * @Abstract Clear the matrix.
 */
function clearMatrix() {
  x = "";
}

//======================================================================backtraking solve.===================================================================
/**
 * @abstract seek a 0 in matrix.
 * @param {*} matrix matrix to solve.
 * @returns return true if have 0.
 */
function seekC(matrix){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++)
      if (matrix[i][j] == 0) return true
  }
  return false
}

/**
 * @abstract valid the pos target.
 * @param {*} i #row.
 * @param {*} j #col.
 * @param {*} num #num to try.
 * @param {*} matrix #matrix to seek.
 * @returns true if value is valid.
 */
function valid(i, j, num, matrix) {
  for (let x = 0; x < 9; x++) {
    if(matrix[i][x] == num) return false
  }

  for (let x = 0; x < 9; x++) {
    if(matrix[x][j] == num) return false
  }
  x = i - i % 3
  y = j - j % 3
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++){
          if (matrix[i + x][j + y] == num) return false
      }
  }
  return true
}

/**
 * @abstract Solve a matrix with backtraking
 * @param {*} row row.
 * @param {*} col col.
 * @param {*} matrix matrix to solve.
 * @returns returns true if have solve.
 */
function recSolve(row, col, matrix) {
  //end cond.
  if(row == 8 && col == 9 && seekC(matrix) == false) return true
  else {
    //index.
    if(col == 9) {row = row + 1; col = 0}
    //if pos is not a 0 go to next pos.
    if(matrix[row][col] != 0) return recSolve(row, col + 1, matrix)

    //try to any number.
    for (let i = 1; i < 10; i++) {
      //valid the pos for the number to try.
      if( valid(row, col, i, matrix) ) {
        //matrix pos is now the number.
        matrix[row][col] = i
        //if the sudoku have solve with this number
        if(recSolve(row, col + 1, matrix)) return true

        //if doesn´t have solution with this number reset and try with the next.
        matrix[row][col] = 0
        }
      }
    }
    return false
}

//======================================================================backtraking solve end.===================================================================

/**
 * @abstract copy the cuadrant in matrix Mid for the respective cuadrante in all matrix
 * @param {*} matrixM Mid
 * @param {*} matrix UL, UR, BL, BR
 * @param {*} x1 cor x Mid
 * @param {*} y1 cor y Mid
 * @param {*} x2 cor x Matrix
 * @param {*} y2 cor y Matrix
 */
function copyMM(matrixM, matrix, x1, y1, x2, y2) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[i + x2][j + y2] = matrixM[i + x1][j + y1];
    }
  }
}
/**
 * @abstract fill all matrix with the middle.
 */
function fillMatrixWithM() {
  copyMM(matMid, matUL, 0 ,0, 6, 6);
  copyMM(matMid, matUR, 0 ,6, 6, 0);
  copyMM(matMid, matBL, 6 ,0, 0, 6);
  copyMM(matMid, matBR, 6 ,6, 0, 0);
}

/**
 * @abstract solve the 5 matrix.
 * @returns return true if is solved.
 */
function solveMatrix() {
  if (recSolve(0, 0, matMid)) {
    fillMatrixWithM();
    recSolve(0, 0, matUL);
    recSolve(0, 0, matUR);
    recSolve(0, 0, matBL);
    recSolve(0, 0, matBR);
    return true;
  }
  return false;
}


/**
 * @abstract fill the principal matrix with UL, UR, MID, BL, BR.
 */
function fillSudo() {
  //Primero rellenamos el centro
  indice = 0;
  for (i = 6; i < 15; i++) {
          indice2 = 0;
          for (j = 6; j < 15; j++) {
                  sudoMatrix[i][j] = matMid[indice][indice2];
                  indice2++;
          };
          indice++;
  };

  //Segundo arriba izquierda
  indice = 0;
  for (i = 0; i < 6; i++) {
          indice2 = 0;
          for (j = 0; j < 9; j++) {
                  sudoMatrix[i][j] = matUL[indice][indice2];
                  indice2++;
          };
          indice++;
  };

  for (i = 6; i < 9; i++) {
          indice2 = 0;
          for (j = 0; j < 6; j++) {
                  sudoMatrix[i][j] = matUL[indice][indice2];
                  indice2++;
          };
          indice++;
  };

  //Tercero arriba derecha
  indice = 0;
  for (i = 0; i < 6; i++) {
          indice2 = 0;
          for (j = 12; j < 21; j++) {
                  sudoMatrix[i][j] = matUR[indice][indice2];
                  indice2++;
          };
          indice++;
  };

  for (i = 6; i < 9; i++) {
          indice2 = 3;
          for (j = 15; j < 21; j++) {
                  sudoMatrix[i][j] = matUR[indice][indice2];
                  indice2++;
          };
          indice++;
  };

  //Cuarto abajo izquierda
  indice = 0;
  for (i = 12; i < 15; i++) {
          indice2 = 0;
          for (j = 0; j < 6; j++) {
                  sudoMatrix[i][j] = matBL[indice][indice2];
                  indice2++;
          };
          indice++;
  };

  for (i = 15; i < 21; i++) {
          indice2 = 0;
          for (j = 0; j < 9; j++) {
                  sudoMatrix[i][j] = matBL[indice][indice2];
                  indice2++;
          };
          indice++;
  };
  //Quinto abajo derecha
  indice = 0;
  for (i = 12; i < 15; i++) {
          indice2 = 3;
          for (j = 15; j < 21; j++) {
                  sudoMatrix[i][j] = matBR[indice][indice2];
                  indice2++;
          };
          indice++;
  };

  for (i = 15; i < 21; i++) {
          indice2 = 0;
          for (j = 12; j < 21; j++) {
                  sudoMatrix[i][j] = matBR[indice][indice2];
                  indice2++;
          };
          indice++;
  };
};


//print matrix in console.
function drawM(matrix) {
  m = ""
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      m += matrix[i][j] + " ";
    }
    m += "\n";
  }
  console.log(m);
}


//clear the matrix.
function clearM(matrix) {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) matrix[i][j] = 0;
}

/**
 * @abstract draw the principal matrix.
 */
function drawPM() {
  count = 1;
  for (let i = 0; i < 21; i++)
    for (let j = 0; j < 21; j++) {
      if (sudoMatrix[i][j] != "") {
        if(Math.floor(Math.random() * 5) == 1) {
          document.getElementById(count).innerHTML = sudoMatrix[i][j]; 
        }
      }
      count++;
    }
}

function drawCells(level, min, max) {
  cells = []
  count = 0;
  number = 1;
  while (count < level) {
    num = Math.floor(Math.random() * ((max + 1) - min) + min);

    if (num >= ((min + 1) + (21* 0)) && num <= (min + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 1)) && num <= (((min + 1) + (21* 1)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 2)) && num <= (((min + 1) + (21* 2)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 3)) && num <= (((min + 1) + (21* 3)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 4)) && num <= (((min + 1) + (21* 4)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 5)) && num <= (((min + 1) + (21* 5)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 6)) && num <= (((min + 1) + (21* 6)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 7)) && num <= (((min + 1) + (21* 7)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };

    if (num >= ((min + 1) + (21* 8)) && num <= (((min + 1) + (21* 8)) + 8)) {
      if (!cells.includes(num)) {
        cells.push(num);
        count++;
      };
    };
  };

  cells.sort();

  for (i = 0; i < 21; i++) {
    for (j = 0; j < 21; j++) {
      if (cells.includes(number)) {
        document.getElementById(number).innerHTML = sudoMatrix[i][j]; 
      };
      number++;
    };
  };

};

//============================================================================================================================================================================
function setId(id) {
  id_selected = id;
}

/**
 * @abstract change color of invalid positions of matrix.
 * @returns none.
 * @param none.
 */
function blackCells() {
  pos = 10;
  flag = true;
  while(flag) {
    for (let i = 0; i != 6; i++) {
      for (let i = 1; i != 4; i++) {document.getElementById(pos).style.background = "black"; pos++;}
      pos += 18;
    }
    pos += 54;
    for (let i = 0; i != 3; i++) {
      for (let i = 0; i != 2; i++) {
        for (let i = 0; i != 6; i++) {document.getElementById(pos).style.background = "black"; pos++}
        pos += 9;
      }
      pos -= 9;
    }
    pos += 72;
    for (let i = 0; i != 6; i++) {
      for (let i = 1; i != 4; i++) {document.getElementById(pos).style.background = "black"; pos++;}
      pos += 18;
    }
    flag = false;
  }
}



//
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "1":
      document.getElementById(id_selected).innerHTML = "1";
      document.getElementById(id_selected).style.background = "blue";

      break;
    case "2":
      document.getElementById(id_selected).innerHTML = "2";
      break;
    case "3":
      document.getElementById(id_selected).innerHTML = "3";
      break;
    case "4":
      document.getElementById(id_selected).innerHTML = "4";
      break;
    case "5":
      document.getElementById(id_selected).innerHTML = "5";
      break;
    case "6":
      document.getElementById(id_selected).innerHTML = "6";
      break;
    case "7":
      document.getElementById(id_selected).innerHTML = "7";
      break;
    case "8":
      document.getElementById(id_selected).innerHTML = "8";
      break;
    case "9":
      document.getElementById(id_selected).innerHTML = "9";
      break;

    case "Backspace":
        document.getElementById(id_selected).innerHTML = "";
        break;

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
  }
}, true);


games = 0;

function drawS(level) {

  if (games == 0) {
    drawCells(level, 132, 309);
    drawCells(level, 0, 177);
    drawCells(level, 12, 189);
    drawCells(level, 252, 429);
    drawCells(level, 264, 441);
    games++;
  };
};



//disable divs in invalid positions.
blackCells();

//test



solveMatrix();
fillSudo();

//drawPM();

//drawM(matUL);
//drawM(matUR);

//drawM(matMid);

//drawM(matBL);
//drawM(matBR);