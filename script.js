//#region 
function sumatoria (n1,n2){
    var sumatoria = n1 + n2 
    return sumatoria;
}
var num1=4;
var num2=6;
let suma = sumatoria(num1,num2); 
console.log(suma);
//#endregion 
//#region 
function restar(n3,n4){
    var resta = n3 - n4;
    return resta;
}
var num3=15;
var num4=10;
let resta= restar(num3,num4);
console.log(resta);
//#endregion
//#region
function division(n5,n6){
    var division = n5/n6;
    return division;
}
var numero5=10;
var numero6=2;
let divi = division(numero5,numero6);
console.log(divi);
//#endregion
//#region
function multiplicacion(n7,n8){
    var multiplicacion= n7*n8;
    return multiplicacion;
}
var numero7=4;
var numero8=20;
let multi= multiplicacion(numero7,numero8);
console.log(multi);
//#endregion
//#region 
let array=[2,4,10.15,5,7];
for (i=0;i<array.length;i++){
    console.log(array[i]);
}
//endregio