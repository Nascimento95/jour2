var cat = {
    name :"Garfield",
    age :3,
    isCute : true,
}
console.log(cat.age)
console.log(cat)
if( cat.isCute) {
    console.log("so cute cat");
} else {
    console.log("chat éclater");
}

console.log("");
console.log("exo 2 combine");
// 02
var cat2 = {
    name :"Poncho",
    age :10,
    isCute : false,
}
var cats = Object.assign(cat, cat2)
console.log(cats);
console.log(cat.age)
console.log(cat2.isCute)

console.log("exo 3 even");
// even fonction
function checkIfEven(num) {
    if (num % 2 == 0)  {
        console.log("even")
    } else {
        console.log("odd");
    }
}

checkIfEven(2)

console.log(" exo 4");

function compare (num1 , num2){
    if( num1 === num2 ){
        console.log("both are the same");
    }else if ( num1 > num2){
        console.log("num 1 is bigger");
    } else{
        console.log("num 2 is bigger");
    }
}

compare(7, 5)

console.log(" exo 05 add up")
var total = 0
function addUp (num){
    for(var i = 1 ; i <= num  ;i++){
         total = total + i; 
        console.log(`${i} + ${total} = ${total}`);
    }
    
}

addUp(12)

console.log()

console.log("06 time ")
console.log("")
// 06 Time
var heure =0
var minute = 0
var seconde = 0
function num (num6){
    for( var i =0 ; i < num6 ; i++){
        seconde++;
        if( seconde === 60){
            minute ++;
            seconde = 0;
          /*  console.log(`${minute} : ${seconde}`);*/
        }
         if ( minute === 60){
            heure ++;
            minute = 0;
            /*console.log( "l'heure a chaque boucle" , heure);*/
        }
        if ( heure === 24){
            heure = 0
        }
        
    }
    console.log(`heure${heure} : minute${minute} : seconde${seconde}`)
}
num(93602)

console.log(" exo bonus 01");
// bonus 01

function generatePassword (num){
    var min =0
    var stockagePassword = ""
    var letter = "ABCEFGHIJKLMNOPQRSTUVWXYZ";
    var max = letter.length -1
    
    for (var i = 0 ; i <= num ; i++) {
        if( num < 6 || num >  15) {
            return "error retry"
        } else {
            var passwordRandom = Math.floor(Math.random() * (max - min + 1) + min);
            var password =  letter.charAt(passwordRandom); 
            stockagePassword = stockagePassword + password
        }
    }

    return stockagePassword
}

var stockage = generatePassword(7)

console.log(stockage);
 console.log("");
 console.log("Bonus 02");
//  bonus02

function launchDice (numberOfDice) {
    var min1 = 0
    var max2 = 6
    for(var i = 0 ; i <= numberOfDice; i++) {
        var dés = Math.floor(Math.random() * (max2 - min1 + 1) + min1);
        console.log(`${dés} + ${i}`)
    }


}
launchDice (6)