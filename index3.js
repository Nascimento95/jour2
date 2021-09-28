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

for (var i = 0 ; i < sentence.length; i++ ){
    index --;
    console.log(sentence.charAt(index))
   
}
var finish = sentence.charAt(index)
console.log(finish)

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

