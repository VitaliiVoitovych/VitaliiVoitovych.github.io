const light = document.querySelector('.logo__light');
start = 8
max = 14;
min = 4;
i = 0 ;
while( i < 100){
    i++;
    for (let a = min ; a <= 14; a++) {
        light.style.filter = "blur(" + a + "px)";
    }
    for (let a = max; a >= 4; a--){
        light.style.filter = "blur(" + a + "px)";
    }
}