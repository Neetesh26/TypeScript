class Circle {
  readonly pi: number = 3.14;

  constructor(public radius: number) {}

  area(): number {
    return this.pi * this.radius * this.radius;
  }
}

const circle = new Circle(5);
// circle.pi = 3.14159; ❌ Error: Cannot assign to 'pi' because it is a read-only property
