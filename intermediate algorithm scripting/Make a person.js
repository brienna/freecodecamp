/*  Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.  */

var Person = function(firstAndLast) {
	var name = this.setFullName(firstAndLast);
	
    this.getFirstName = function() {
    	return name[0];
    }
    
    this.getLastName = function() {
    	return name[1];
    }
    
    this.getFullName = function() {
    	return name[0] + " " + name[1];
    }
    
    this.setFirstName = function(first) {
    	name[0] = first;
    }
    
    this.setLastName = function(last) {
    	name[1] = last;
    }
    
    this.setFullName = function(firstAndLast) {
    	name = firstAndLast.split(" ");
    }
    
};

var bob = new Person('Bob Ross');
Object.keys(bob).length;  // 6 
bob instanceof Person;  // true
bob.firstName;  // undefined
bob.getFirstName();  // Bob 
bob.setFirstName("Haskell");
bob.getFullName();  // Haskell Ross
bob.setFullName("Haskell Curry");  
bob.getLastName();  // Curry
