#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    
    srand(time(NULL));

    int array[20];
    int i;

    // 0에서 20 사이의 난수를 생성하여 배열에 저장
    for (i = 0; i < 20; i++) {
        array[i] = rand() % 21; // 0부터 20까지의 난수 생성
    }

    // 배열 내용 출력
    printf("배열 내용: ");
    for (i = 0; i < 20; i++) {
        printf("%d ", array[i]);
    }
    printf("\n");

    return 0;
}
