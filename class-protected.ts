class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Manager extends Employee {
  public display(): void {
    console.log(`Manager: ${this.name}`); // ✅ Works
  }
}

const mb = new Manager("John");
// console.log(mb.name); ❌ Error: 'name' is protected
mb.display(); // ✅
