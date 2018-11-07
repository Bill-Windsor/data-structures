// Stacks as an array: LIFO  - Last In, First Out

// Functions: push, pop, peek, length

var letters = [];  // this is our stack

var word = "racecar";  // "racecar" is a palindrome
var rword = "";

// Put the letters of the word onto the stack
for (var i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

// Pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
	rword += letters.pop();
}

console.log("word is:         " + word);
console.log("reverse word is: " + rword);

if (rword === word) {
	console.log(word + " is a palindrome.");
}
else {
	console.log(word + " is not a palindrome.");
}


// Real-world case of creating a stack

var Stack = function() {
	this.count = 0;
	this.storage = {};

// Adds a value onto the end of the stack
this.push = function(value) {
	this.storage[this.count] = value;
	this.count++;
}

// Returns the value at the end of the stack, removes the item
this.pop = function() {
	if (this.count === 0) {
		return undefined;
	}

	this.count--;
	var result = this.storage[this.count];
	delete this.storage[this.count];
	return result;
}

this.size = function() {
	return this.count;
}

// Returns the value at the end of the stack, does not delete the item
this.peek = function() {
	return this.storage[this.count-1];
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.push("freeCodeCamp");
console.log(myStack.size();
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());