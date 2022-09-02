let preguntaEdad = prompt("Sos mayor de edad?");
//Estuctrura condicional
//IF (condicion)-> bloque de instrucciones.
//Un "=" es para asignar
//Dos "==" son para comparar
//Tres "===" estrictamente si.
if(preguntaEdad == "si"){
//Bloque de instrucciones a ejecutar si es TRUE.
console.log("Usted es mayor de edad y puede comprar bebidas");
//Utilizar ALERT tb.
}

//IF / ELSE
//Podemos pensar "else" como un "sino" se cumple, o cuando la condicion del if sea falsa.
let color = "Azul"
if(color.toLocaleLowerCase == "Rojo"){
    console.log("El color es Rojo")
}
else{
    console.log("Este color no es Rojo")
}


//Ejemplo con colores if, else if y else.
//tolowerCase() transforma a minuscula toda una cadena.
//= es asignar valor
//== compara si es similar
//=== esperemos un poco

let color = "Azul"
if(color.toLocaleLowerCase == "Rojo"){
    console.log("El color es Rojo")
}
else if (color == "azul");{
    console.log("El color Azul es primario");
}
else if (color == "amarrillo");{
    console.log("El color Amarrillo es primario");
}

else{
    console.log("Este color no es primario");
}







//EJEMPLO CODER
let precio = 100;
//Bloque de codigo donde va a entrar una sola variable.
if (precio < 20 ){
    console.log("El precio es menor que 20");
}
else if (precio <50 ){
    console.log("El precio es menor que 50");
}
else if (precio <100 ){
    console.log("El precio es menor que 50");
}
else{console.log("El precio es mayor que 100");
}



//CLASE 3 --CICLOS:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

//CICLO FOR
//Tiene tres terminos DESDE, HASTA y ACTUALIZACION.

for (let index = 3; index<=10; index = index + 1){
    //Instruccion a ejecutar
    console.log(index);
    //primera vuelta ciclo
    //seg vuelta ciclo 1
    //tercer ciclo 2
    
//Quiero que un usuario ingrese un numero y a partir del numero ingresado le mostremos la tabla de multiplicar de ese numero (tabla del 0 al 10)
for (let index = 0; index<=10; index = index++){
    //Instruccion a ejecutar
    console.log(index);
    //primera vuelta ciclo
}
