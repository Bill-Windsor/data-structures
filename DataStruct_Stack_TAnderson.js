function Stack() {
	this.length = 0;
	this.datastore = [];

	this.contains = function(value) {
		for (var i = 0; i < this.datastore.length; i++) {
			if (this.datastore[i] === value) {
			return true;
		}
			else {
				return false;
			}
		}
	};

	this.add = function(value) {
		this.datastore.push(value);
		this.length++;
	};

	this.isEmpty = function() {
		return this.length === 0;
	};

	this.remove = function(value) {
		for (var i = 0; i < this.datastore.length, i++) {  // assumes >= 1 element on the stack
			if (this.datastore[i] === value) {
				delete this.datastore[i];
			}
		}
	};
}

var stack1 = new Stack();
console.log(stack1.isEmpty());  // Returns 'true'

console.log(stack1.add(2));
console.log(stack1.isEmpty());  // Returns 'false'

console.log(stack1.datastore);

console.log(stack1.add(3));
console.log(stack1.add(4));
console.log(stack1.add(5));
console.log(stack1.add(6));

console.log(stack1.contains(5));

console.log(stack1.remove(6));  // Removes element at top of stack
console.log(stack1.remove(3));  // Test to see if there is "random element remove" (?!)

console.log(stack1.datastore);
