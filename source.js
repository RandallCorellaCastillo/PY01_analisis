//=========================================Globals values====================================================
/**
 * @type {String}
 * Value of null values in matrix.
 */
x = "";


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
 * @abstract shuffle the list of numbers.
 * @param list : list with numnbers.
 */
function shuffleArray(list) {
  for (let i = 0; i < 10; i++) {
    random = Math.floor(Math.random() *list.length);
    randomc = Math.floor(Math.random() *list.length);
    c = list[random];
    k = list[randomc];
    list[randomc] = c;
    list[random] = k;
  }
  return list;
}

/**
 * @abstract reset the list.
 */
function reset() {
  values = [1,2,3,4,5,6,7,8,9];
}


/**
 * @abstract find the cube from cords.
 * @param {*} n : number.
 * @param {*} x : cord x.
 * @param {*} y : cordy.
 * @param {*} mx : limitx.
 * @param {*} my : limity.
 * @returns 
 */
function findCube(x, y, mx, my) {
  dimX = -1*((mx - 8) - x);
  dimY = -1*((my - 8) - y);

  if(dimX < 3) {
    if(dimY < 3) {return 0;}
    if(dimY < 6) {return 1;}
    if(dimY < 9) {return 2;}
  }
  if(dimX < 6) {
    if(dimY < 3) {return 3;}
    if(dimY < 6) {return 4;}
    if(dimY < 9) {return 5;}
  }
  if(dimX < 9) {
    if(dimY < 3) {return 6;}
    if(dimY < 6) {return 7;}
    if(dimY < 9) {return 8;}
  }
}

/**
 * @abstract verify if the value is valid in this pos.
 * @param {*} n : number.
 * @param {*} x : cord x.
 * @param {*} y : cordy.
 * @param {*} mx : limitx.
 * @param {*} my : limity.
 * @returns 
 */
function crossVerify(n, x, y, mx, my) {
  for (let i = mx - 8; i < mx; i++) {if(sudoMatrix[i][y] == n) {return false;}}//if Hor contains a number.
  for (let j = my - 8; j < my; j++) {if(sudoMatrix[x][j] == n) {return false;}}//if Ver contains a number.
  return true;
}

/**
 * @abstract verify if the value is valid in this pos.
 * @param {*} n : number.
 * @param {*} x : cord x.
 * @param {*} y : cordy.
 * @param {*} mx : limitx.
 * @param {*} my : limity.
 * @returns 
 */
function cubeVerify(n, x, y, mx, my) {
  cube = findCube(x, y, mx, my);
  cordx = mx - 8;
  cordy = my - 8;
  if(cube == 1) {cordy += 3}
  if(cube == 2) {cordy += 5}
  if(cube == 3) {cordx += 2}
  if(cube == 4) {cordy += 2; cordx += 2}
  if(cube == 5) {cordy += 5; cordx += 2}
  if(cube == 6) {cordx += 5}
  if(cube == 7) {cordy += 3; cordx += 5}
  if(cube == 8) {cordy += 5; cordx += 5}

  for (let i = 0; i < 3; i++) {
    var res;
    for (let j = 0; j < 3; j++) {
      res += sudoMatrix[i + cordx][j + cordy] + " ";
      if(sudoMatrix[i + cordx][j + cordy] == n){return false;}
    }//if Ver contains a number.
    res += "\n";
  }
  return true;
}


function init_matrix(x, y, mx, my, cant) {
  //iter the row.
  for (let i = 0; i != cant; i++ ) {
    for (let j = x; j < x + 9; j++) { //iter the row.
      val = Math.floor(Math.random() * 9 + 1);
      for (let k = y; k < y + 9; k++) {
        if(crossVerify(val, j, k, mx, my) && cubeVerify(val, j, k, mx, my) && sudoMatrix[j][k] == 0) {
          sudoMatrix[j][k]=val;
        }
      }
    }
  }
}
 
function drawM() {
  clearMatrix();
  init_matrix(6, 6, 14, 14, 1);
  init_matrix(0, 0, 8, 8, 1);
  init_matrix(0, 12, 8, 20, 1);
  init_matrix(12, 0, 20, 8, 1);
  init_matrix(12, 12, 20, 20, 1);
  count = 1;
  for (let i = 0; i < 21; i++) {
    for (let j = 0; j < 21; j++) {
      document.getElementById(count).innerHTML = sudoMatrix[i][j];
      count++;
    }
  }
}

function setId(id) {
  id_selected = id;
  document.getElementById(id_selected).style.backgroundColor = "red";
  console.log("Here is id:" + id);
}

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

blackCells();