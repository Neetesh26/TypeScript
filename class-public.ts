class Car {
  public brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  public start(): void {
    console.log(`${this.brand} engine started`);
  }
}

const c = new Car("Tesla");
console.log(c.brand); // ✅ Accessible
c.start(); // ✅ Accessible