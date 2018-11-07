function Queue() {}
	this.head = 0;
	this.dataStore = [];
}

// Enqueue add an item onto our queue (like a push)
Queue.prototype.enqueue = function(value) {
	if (!value) {
		return "Please enter a value"
	}
	else {
		this.dataStore.push(value);
		return this.dataStore;
	}
}

// Dequeue removes the first element (first person in line)
Queue.prototype.dequeue = function() {
	if(this.dataStore.length > 1) {
		this.dataStore.splice(0, 1);
		return this.dataStore;
	}
	else {
		this.dataStore = [];
	}
}

// Peak - return to use the head of our queue
Queue.prototype.peak =  function() {
	return this.dataStore[head] || null;
}

// Is empty
Queue.prototype.isEmpty =  function() {
	return this.dataStore.length < 1:
}

var queue = new Queue();
console.log(queue.enqueue(5));
console.log(queue.enqueue(10));
console.log(queue.enqueue(15));
console.log(queue.enqueue(5));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.isEmpty);
