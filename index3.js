// 1
var fruits = ["mango","Lemon","blueberry"]
console.table(fruits)

// 2 access
var ingredients =["eggs", "milk", "butter"]
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))
// 3 add and remove 
var object = ["pen", "book", "lamp",]
object.unshift("chair")
console.log(object)
object.pop()
console.log(object)
object.push("laptop")
console.log(object)
object.shift("chair")
console.log(object)
// 4 order
var numbers = [4, 10, 8, 12, 6]
numbers.sort((a, b) => b - a)
console.log(numbers)
numbers.sort((a, b) => a - b)
console.log(numbers)
// 5 boucle
var total = 0;
var limit = 10;

for (var i = 0; i <= limit; i++){
    total += i;
     console.log(i);
}
console.log(total)

// 06
var sentence ="hello konexio!"
var index =14
var result = ""

for (var i = 0 ; i < sentence.length; i++ ){
    index --;
    
    result = result + sentence.charAt(index)
}

console.log(result)

/* bonus
var sentence ="hello konexio!"
console.log(sentence.split())
var tab = sentence.split("")
var index =14
console.log(tab)
for (var i = 0 ; i < tab.length; i++ ){
    index --;
    console.log(sentence.charAt(index))
}*/

// bonus 1
for (var i=1; i <= 100; i++){
     if(  i % 3 == 0  &&  i % 5 == 0 ){
          console.log(i)
         console.log("fizz")
     }else if( i % 5 == 0 ){
         console.log("buzz")
     }else if(  i % 3 == 0 ){
          console.log(i)
          console.log("fizzbuzz")
     }
     if( i % 7 == 0 ){
          console.log(i)
          console.log("rien")
      }
 }

//  BONUS 02
var total = 0 
var limit = 10
var i = 0
while ( i  < limit){
     i ++;
     total += i;
     console.log(total)
}
// bonus 3
var student = ["helene","evan","alain","eloa","jeremy","jong"]
var min = 0
var max = student.length - 1

var studentRamdon = student[Math.floor(Math.random() * (max - min + 1) + min)];
console.log(studentRamdon)

// bonus 04
var tab = []
var limit = 20
var max = 100


for ( var i = 0 ; i <= limit ; i++){
     var ramdonNumber =Math.floor(Math.random() * max)
     tab.push(ramdonNumber)
     console.log(tab)
 }
 var numberMax = 0
 for ( var i = 0 ; i < tab.length; i++){
    
     if (tab[i] > numberMax ){
     numberMax = tab[i]
     }
     console.log(numberMax);