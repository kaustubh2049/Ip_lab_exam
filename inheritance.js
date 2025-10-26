class parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
  }
}
class student extends parent {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
  showcourse() {
    console.log(` i am currently studying in the course of ${this.course}`);
  }
}
let student1 = new student("Kaustubh", "18", "Information Technology");
student1.greet();
student1.showcourse();
