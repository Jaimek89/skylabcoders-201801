//Person

//a) Write a constructor function called Person and that has the following arguments:

function Person(firstName,lastName,age,gender,interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

//b) Write the following three methods for Person.

Person.prototype.greeting = function(){
    return 'Hi! I\'m ' + this.firstName;
}

Person.prototype.farewell = function(){
    return this.firstName + ' has left the building. Bye for now!';
}

Person.prototype.bio = function(){
    if(this.gender === 'M'){
    return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. He likes ' + this.interests;
    }else{
        return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. She likes ' + this.interests;
    }
}

var person1 = new Person ('Jaime','Rocafull',28,'M',['eat','sleep']);

//Student

//a) Write a constructor function called Student that inherit from Person and that has the following arguments:

function Student(firstName,lastName,age,gender,interests){
    Person.call(this,firstName,lastName,age,gender,interests);
}

//b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:

Student.prototype = new Person()

Student.prototype.greeting = function(){
    return 'Yo! I\'m ' + this.firstName;
}

var student1 = new Student('Jorge','Andrade',19,'M',['play','flight']);

//Teacher

//a) Write a constructor function called Teacher that inherit from Person and that has the following arguments:

function Teacher(firstName,lastName,age,gender,interests,subject){
    Person.call(this,firstName,lastName,age,gender,interests);
    this.subject = subject;
}

//b) The Teacher must inherit all methods from Person and overwrite greeting method to change its behavior to print:

Teacher.prototype = new Person()

Teacher.prototype.greeting = function(){
    if(this.gender === 'M'){
        return 'Hello. My name is Mr. ' + this.lastName + ' and I teach ' + this.subject;
    }else{
        return 'Hello. My name is Mrs. ' + this.lastName + ' and I teach ' + this.subject;
    }
}

var teacher1 = new Teacher('Leslie','Adams',54,'F',['Cook','Read'],'Mathematics');