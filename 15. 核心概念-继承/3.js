function inherit(child, parent) {
  function F() {}
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
}
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
inherit(Student, Person);

var student = new Student(18, "tuotuo", "中国大学");

console.log(student);
