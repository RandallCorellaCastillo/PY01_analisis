matUR = [[2, 5, 0, 0, 3, 0, 9, 0, 1],
        [0, 1, 0, 0, 0, 4, 0, 0, 0],
        [4, 0, 7, 0, 0, 0, 2, 0, 8],
        [0, 0, 5, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 9, 8, 1, 0, 0],
        [0, 4, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0, 7, 2],
        [0, 7, 0, 0, 0, 0, 0, 0, 3],
        [9, 0, 2, 0, 0, 0, 6, 0, 4]];

matUL = [[2, 5, 0, 0, 3, 0, 9, 0, 1],
        [0, 1, 0, 0, 0, 4, 0, 0, 0],
        [4, 0, 7, 0, 0, 0, 2, 0, 8],
        [0, 0, 5, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 9, 8, 1, 0, 0],
        [0, 4, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0, 7, 2],
        [0, 7, 0, 0, 0, 0, 0, 0, 3],
        [9, 0, 2, 0, 0, 0, 6, 0, 4]];

matMid = [[2, 5, 0, 0, 3, 0, 9, 0, 1],
        [0, 1, 0, 0, 0, 4, 0, 0, 0],
        [4, 0, 7, 0, 0, 0, 2, 0, 8],
        [0, 0, 5, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 9, 8, 1, 0, 0],
        [0, 4, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0, 7, 2],
        [0, 7, 0, 0, 0, 0, 0, 0, 3],
        [9, 0, 2, 0, 0, 0, 6, 0, 4]];

matBL = [[2, 5, 0, 0, 3, 0, 9, 0, 1],
        [0, 1, 0, 0, 0, 4, 0, 0, 0],
        [4, 0, 7, 0, 0, 0, 2, 0, 8],
        [0, 0, 5, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 9, 8, 1, 0, 0],
        [0, 4, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0, 7, 2],
        [0, 7, 0, 0, 0, 0, 0, 0, 3],
        [9, 0, 2, 0, 0, 0, 6, 0, 4]];

matBR = [[2, 5, 0, 0, 3, 0, 9, 0, 1],
        [0, 1, 0, 0, 0, 4, 0, 0, 0],
        [4, 0, 7, 0, 0, 0, 2, 0, 8],
        [0, 0, 5, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 9, 8, 1, 0, 0],
        [0, 4, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0, 7, 2],
        [0, 7, 0, 0, 0, 0, 0, 0, 3],
        [9, 0, 2, 0, 0, 0, 6, 0, 4]];



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
];


function fillSudo() {
        //Primero rellenamos el centro
        for (i = 6; i < 15; i++) {
                indice = 0;
                indice2 = 0;
                for (j = 6; j < 15; j++) {
                        sudoMatrix[i][j] = matMid[indice][indice2];
                        indice2++;
                };
                indice++;
        };

        //Segundo arriba izquierda
        for (i = 0; i < 9; i++) {
                indice = 0;
                indice2 = 0;
                for (j = 0; j < 9; j++) {
                        sudoMatrix[i][j] = matUL[indice][indice2];
                        indice2++;
                };
                indice++;
        };

        //Tercero arriba derecha
        for (i = 0; i < 9; i++) {
                indice = 0;
                indice2 = 0;
                for (j = 12; j < 21; j++) {
                        sudoMatrix[i][j] = matUR[indice][indice2];
                        indice2++;
                };
                indice++;
        };

        //Cuarto abajo izquierda
        for (i = 12; i < 21; i++) {
                indice = 0;
                indice2 = 0;
                for (j = 0; j < 9; j++) {
                        sudoMatrix[i][j] = matBL[indice][indice2];
                        indice2++;
                };
                indice++;
        };

        //Quinto abajo derecha
        for (i = 12; i < 21; i++) {
                indice = 0;
                indice2 = 0;
                for (j = 12; j < 21; j++) {
                        sudoMatrix[i][j] = matBR[indice][indice2];
                        indice2++;
                };
                indice++;
        };
};


function resolverMatriz(matriz, indice) {
        if (indice == 9) {
                return matriz;
        } else {
                matriz = resolverFila(matriz[indice], matriz, indice);
                indice++;
                return resolverMatriz(matriz, indice);
        };
};

/*
function resolverMatrizAux(fila, matriz, indice) {
        numeros = numerosPosibles(fila);

        for(j = 0; j < 9; j++) {
                if (fila[j] == 0) {
                        for (t = 0; t < numeros.length; t++) {
                                filaProv = fila;
                                filaProv[j] = numeros[t];
                                matrizProv = matriz;
                                matrizProv[indice] = filaProv;
                                col = sacarColumna(matrizProv, j);
                                
                                if (validarFila(filaProv) && validarFila(col)) {
                                        rnumeros.splice(numeros.indexOf(numeros[t]), 1);
                                        matriz = matrizProv;
                                        break;
                                };
                        };
                };
        };  
        return matriz;
};
*/

function resolverFila (fila, matriz, indice) {
        //console.log(aux);


        while (true) {
                i = 0;
                //console.log(aux);

                while(i < 9) {
                        if (fila[i] == 0) {
                                numeros = shuffle(numerosPosibles(indice));
                                //console.log(numeros);
                                for (t = 0; t < numeros.length; t++) {
                                        filaProv = fila;
                                        filaProv[i] = numeros[t];
                                        matrizProv = matriz;
                                        matrizProv[indice] = filaProv;
                                        col = sacarColumna(matrizProv, i);
                                        console.log(col);
                                        console.log(filaProv);
                                        
                                        if (validarFila(filaProv) && validarFila(col)) {
                                                console.log("aa");
                                                matriz[indice] = filaProv;
                                                numeros.splice(numeros.indexOf(numeros[t]), 1);
                                                break;
                                        };
                                };
                        };
                        i++;
                };

                //console.log(matriz[indice]);
                if (validarFila2(matriz[indice])) {
                        break;
                };
        };     
        
        return matriz;

};

//Valida repetidos
function validarFila(fila) {
        filaBuena = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        for(i = 0; i < 9; i++) {
                if (fila[i] != 0) {
                        if (filaBuena.includes(fila[i])) {
                                indice = filaBuena.indexOf(fila[i]);
                                filaBuena.splice(indice, 1);
                        } else {
                                return false;
                        };
                };
        };

        return true;
};


//Valida repetidos y 0´s
function validarFila2(fila) {
        filaBuena = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        for(i = 0; i < 9; i++) {
                if (fila[i] != 0) {
                        if (filaBuena.includes(fila[i])) {
                                indice = filaBuena.indexOf(fila[i]);
                                filaBuena.splice(indice, 1);
                        } else {
                                return false;
                        };
                } else{
                        return false;
                };
        };

        return true;
};

//saca las posibles opciones solo con el indice de la fila deseada
function numerosPosibles(ind) {
        filaBuena = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        fila = mat[ind];
        
        for(i = 0; i < 9; i++) {
                if (fila[i] != 0) {
                        if (filaBuena.includes(fila[i])) {
                                indice = filaBuena.indexOf(fila[i]);
                                filaBuena.splice(indice, 1);
                        };
                };
        };

        return filaBuena;
};

//Saca la columna de la matriz deseada por su indice
function sacarColumna(matriz, numeroColumna) {
        columna = [];

        for(i = 0; i < 9; i++) {
                columna.push(matriz[i][numeroColumna]);
        };

        return columna;
};

function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
};

//resolverMatriz(grid, 0);
//console.log(resolverMatriz(grid, 0));
fillSudo();
console.log(sudoMatrix);