// exo 1
var limit = 47
var numberPair = 0


for (var i = 11 ; i < limit ; i++){
    if( i %2 == 0){
        numberPair = numberPair + i;
        console.log(i)
    }
    
   }
   console.log(numberPair + "nombre paire")

// exo 02 impair

var limit = 588
var numberImpair = 0

for ( var i = 108 ; i < limit; i++){
    if (i %2 == 1){
        numberImpair = numberImpair + i;
        console.log(i)
    }
}
console.log(numberImpair + "nombre Impair")

//  exo 03 puissance et racine carrée

var numbers = [1,2,3,4,5]
var squares = []
var roots = []
var power = Math.pow(numbers[2],2)
var racine = Math.sqrt(squares[i],2)


for (var i = 0 ; i < numbers.length; i++){
    var power = Math.pow(numbers[i],2)
    squares.push(power);
    
}
console.log(squares);

for (var i = 0 ; i < numbers.length; i++){
    var puissance = Math.sqrt(squares[i])
    roots.push(puissance);
}
console.log(roots)

// 03 table de multiplication v1
var table3 = 3
var limite = 10
var result = 0
for ( var i = 0; i <= limite; i++ ){
    result = table3 * i ;
    console.log(`${table3} * ${i} = ${result}`);
}
// 04 table de multiplication v2
var limitV2 = 10


for (var i = 0 ; i <= limitV2; i++){
    for(var j = 0 ; j <= limitV2; j++){
        var resultV2 = i * j;
        console.log(`${i} * ${j} = ${resultV2}`);
        
    }
    console.log(" ")
}
//06 Factorielle v1
var limit7 = 7
var factorielle = 1
for (var i=1 ; i <= limit7 ; i++){
    
    factorielle = i * factorielle ;
    
    console.log(factorielle);
}
// 07 factorielle v2
var limit8 = 8
var factorielle1 = 1
for (var i=1 ; i <= limit8 ; i++){
    factorielle1 = i * factorielle1 ;
    
    for(var j=1 ; j <= i ; j++){

    }
    console.log(`resulta factorielle ${i}! = ${factorielle1}`);
}
// 07 /*
console.log("------------- 08");
//08 somme des carré 

var resultDeI = 0 


 for (var i = 5; i <= 10 ; i++){
   // var resultMulti = table5 + table6 + table7 + table8 + table9 + table10
        console.log(`c'est la racine carre de ${i} = `,i * i);
        console.log(`l'adition de racine carre avec le  var ${resultDeI} + ${i*i} = `,resultDeI + i*i);
        resultDeI +=  i * i
 }
//  console.log(resultMulti)
console.log( "resulta final ", resultDeI)

//09 comptons
var resultDe7 = 0 ;

for ( var i = 100 ; i < 1000 ; i++){
    if( i % 7 == 0){
        resultDe7 ++;
        console.log("multiple de 7 (i)" , i);
    }else{

    }
    console.log(`${resultDe7}`);
}
console.log( "il y a ",`${resultDe7}` ," multiple de 7");
console.log("exercice chance 10")
// exo 10 
var numberBig =0
var min = 1 
var max = 6
for ( var i = 0 ; i <= 20 ; i++){
    var aléa = Math.floor(Math.random() * (max - min + 1) + min)
    if ( aléa >= 5 ){
        numberBig += aléa 
        console.log(`tout les resultat plus grand que 5 a chaque tour ${aléa}`,`${numberBig}`)
    }
    
}
console.log(" number stocker final",numberBig)
console.log("exo boite 1");
// boite 1 
var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);