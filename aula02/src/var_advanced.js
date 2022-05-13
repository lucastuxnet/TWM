/*
function loop() {
    for (var i = 0; i < 10; i++){
        console.log(i);
    }
}

const soma2 = (a,b) => {
    return a+b;
}

const soma = function (a,b) {
    return a+b;
}

const soma3 = (a,b) => a+b;

const ola = () =>{
    console.log('Dentro da funcao ola!!')
    
}

const dobrosoma = (a,b) => 2*(a+b);

var x = 19;
var y = 20;

console.log(soma(x,y));
console.log(soma2(x,y));
console.log(soma3(12,13));
console.log(dobrosoma(12,13));
ola();
// loop();

*/

/*
console.log(i);
*/

const funcs = [];

for ( var i = 0; i < 10; i++){
    if(i == 4){
        funcs.push(function (a){
            console.log(a+4);
    
        })

    }
    
    else {
        funcs.push(function (a){
            console.log(a);

        })

    }
}

funcs[4](2);
funcs[8](8);
