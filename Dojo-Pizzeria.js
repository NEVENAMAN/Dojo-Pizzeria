//-------------------------------------------------------------------------------------------------------------
console.log("Sandwish -------------------------------------")
function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwish = {};
    sandwish.bread = bread;
    sandwish.protein = protein;
    sandwish.cheese = cheese;
    sandwish.toppings = toppings;
    return sandwish;
}
var pizz1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(JSON.stringify(pizz1));

//-------------------------------------------------------------------------------------------------------------
console.log("Pizza Oven -------------------------------------")
function pizzOven(crustType, sauceType, cheeses, toppings){
    var pizzOven = {};
    pizzOven.crustType = crustType;
    pizzOven.sauceType = sauceType;
    pizzOven.cheese = cheeses;
    pizzOven.toppings = toppings;
    return pizzOven;

}
var pizzOven1 = pizzOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
var pizzOven2 = pizzOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(JSON.stringify(pizzOven1));
console.log(JSON.stringify(pizzOven2));

//-------------------------------------------------------------------------------------------------------------
//Create a function called randomPizza that uses Math.random() to create a random pizza!
console.log("Random Pizz -------------------------------------");
function randomPiz(arry){
    var randompizz = Math.floor(Math.random()*arry.length);
    var item = arry[randompizz];
    return item;
}
var arry= [pizz1 , pizzOven1 ,pizzOven2];
var result= randomPiz(arry);
console.log(JSON.stringify(result));

