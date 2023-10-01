class StudentTypescipt {
    constructor(private name: string, private age: number) {}
  
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
const student_type = new StudentTypescipt("John", 30);
student_type.greet();