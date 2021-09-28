// 01 number 
var interger = 102
var float =13.9
console.log(interger , float);
// 02 convert 
var basic = 34
var stringified = basic.toString()
console.log(stringified);
// 03 round
var num = 1.5
var rounded = Math.round(num)
console.log(rounded);
//04 Arithmétique
var test = 12;
var bis = 5;
console.log( test + bis);
console.log( test - bis);
console.log( test * bis);
console.log( test / bis);
console.log (test ** bis);
console.log (test % bis);
// 05 Comparaison
var test = 143 
var bis = 219
var result = test < bis
console.log(result);
var result = test <= bis
console.log(result);
var result = test == bis
console.log(result);
var result = test > bis
console.log(result);
var result = test >= bis
console.log(result);
var result = test != bis
console.log(result);
var result = test !== bis
console.log(result);
var result = test < bis
console.log(result);
var result = test === bis
console.log(result);

var test = 143
var bis = 219
console.log(test > bis)
console.log(test < bis)

// 06 Condition 
var limit =50
var score = 64
if(score >= limit){
    console.log("ok good ! ")
} else{
    console.log("oh nooo ....")
};
// 07 condition 2
var password = "azerty"

if(password.length > 5 ){
    console.log("the password is secure")
} else{
    console.log("password éclater")
};

// 08 Condition 3

if(score >= limit && password.length > 5 ){
    console.log("Everything is good")
}else if(score >= limit || password.length > 5 ){
    console.log("Something is good")
}else{
    console.log("Nothing is good")
}

// bonus 01

var min = 1;
var max = 6;
var random = Math.floor(Math.random() * (max - min + 1) + min);

console.log( random);
if(random === max){
    console.log("you win")
}else{
    console.log("you loose")
};

// bonus 2
var month = "january"


switch (month) {
	case "april": 
		console.log("spring");
		break;
	case "january": 
		console.log("Winter");
		break;
	case "august": 
		console.log("summer");
		break;
	case "december": 
		console.log("Let it snow !");
		break;
	default: 
		console.log("That's not a season...");
}

// bonus 3
var roundedNumber = 3.6

