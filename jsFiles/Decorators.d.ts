declare function Logger(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class Calculator {
    add(a: number, b: number): number;
}
declare const calc: Calculator;
