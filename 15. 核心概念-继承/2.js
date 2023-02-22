function Person(age, name) {
  this.age = age;
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
function Student(age, name, school) {
  Person.call(this, age, name);
  this.school = school;
}
Student.prototype = new Person();
Student.prototype.constructor = Student;

var student = new Student(18, "tuotuo", "中国大学");
Person.prototype.sayAge = function () {
  console.log(this.age);
};
Student.prototype.saySchool = function () {
  console.log(this.school);
};
var person = new Person(18, "tuotuo");
console.log(student, person);
