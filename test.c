#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int countPat = 0;
int countCantVac = 0;

struct patogeno {
    char* name;
    char* efect;
};

struct cantVac {
    char* pais;
    char* vacuna;
    char* patogeno;
    int cantidad;

};

int main () {

    struct patogeno patogenos[100];
    struct cantVac cantVacs[100];

    char opcion;
    // switch statement to print output according to the

    do {
        printf("A: incluir patogeno.\nB: incluir cantidad de vacunas aplicadas por pais.\nC: cantidad de cobertura por pais por patogeno.\n:");
        scanf("%c", &opcion);

        /* Inicio del anidamiento */

        switch ( opcion ){
            case 'A': {
                char nombre[100];
                char efecto[100];
                printf("Ingrese el nombre del patogeno: ");
                scanf("%s", nombre);
                printf("Ingrese el nombre del efecto del patogeno: ");
                scanf("%s", efecto);

                struct patogeno nuevo;

                nuevo.name = nombre;
                nuevo.efect = efecto;
                patogenos[countPat++] = nuevo;
                printf("\n");
                break;

            }
            case 'B': {
                char pais[100];
                char vacuna[100];
                char patogeno[100];
                int cantidad;
                printf("Ingrese el nombre del pais: ");
                scanf("%s", pais);
                printf("\nIngrese el nombre de la vacuna: ");
                scanf("%s", vacuna);
                printf("\nIngrese el nombre del patogeno: ");
                scanf("%s", patogeno);
                printf("\nIngrese la cantidad de vacunas: ");
                scanf("%d", &cantidad);

                struct cantVac cantVacPaisN;

                cantVacPaisN.pais = (char*) malloc (strlen(pais) * sizeof(char*));
                cantVacPaisN.vacuna = (char*) malloc (strlen(vacuna) * sizeof(char*));
                cantVacPaisN.patogeno = (char*) malloc (strlen(patogeno) * sizeof(char*));

                strcpy(cantVacPaisN.pais, pais);
                strcpy(cantVacPaisN.vacuna, vacuna);
                strcpy(cantVacPaisN.patogeno, patogeno);
                cantVacPaisN.cantidad = cantidad;
                cantVacs[countCantVac++] = cantVacPaisN;
                break;
            }
            case 'C': {

                for(int i = 0; i < countCantVac; ++i) {
                    struct cantVac test;
                    test = cantVacs[i];
                    printf("Pais: %s\n", test.pais);
                    printf("Patogeno: %s\n", test.patogeno);
                    printf("cantidad: %d", test.cantidad);
                    printf("\n");
                }
                printf("\n");
                break;
            }
        }
        fflush(stdin);
         /* Fin del anidamiento */

    } while ( opcion != 4 );
}



