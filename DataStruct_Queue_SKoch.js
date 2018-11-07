// Queue #2  – FIFO

var Queue = function() {
	this.storage = {};
	this.start = 0;
	this.end = 0;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.end ++] = value;
}

Queue.prototype.dequeue = function() {
	var result = this.storage[this.start];
	delete this.storage[this.start];
	this.getSize() && this.start ++;
	return result;
}

Queue.prototype.getSize = function() {
	return this.end – this.start;
}


// Queue #1  – FIFO

var Queue = function() {
	this.storage = {};
	this.size = 0;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.size ++] = value;
}

Queue.prototype.dequeue = function() {
	this.size && this.size --;
	var result = this.storage[0];
	delete this.storage[0];
	for (var key in this.storage) {
		this.storage[key – 1] = this.storage[key];
		delete this.storage[key];
	}
	return result;
}

Queue.prototype.getSize = function() {
	return this.size;
}
