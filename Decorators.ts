// function getinfoD(target: any, propertyKey: any) {
//     console.log( `Decorator called on ${target}` );
//     console.log( `Decorator called on 2nd line ${target.name}` );
//     // console.log( `Decorator called on 3rd line ${descriptor}` );
// } 

// class University {
//     constructor(public name: string) {}

//     @getinfoD  //decorator applied to method like keylogger 
//     getDetails() {
//         return `University Name: ${this.name}`;
        
//     }
// }





// ✅ Enable experimentalDecorators in tsconfig.json before running this

// Decorator function
function Logger(target:any,propertyKey:string,descriptor:PropertyDescriptor){
 const orgDeco = descriptor.value

 descriptor.value = function (...args:any[]) {
    console.log('property key is :' , propertyKey);
    
    const result =orgDeco.apply(this,args)
    console.log('result is  : ' , result);
    
    return result
 }

 return descriptor
}



class Calculator {
  @Logger
  add(a: number, b: number) {
    return a + b;
  }

//   @Logger
//   multiply(a: number, b: number) {
//     return a * b;
//   }
}

// Testing
const calc = new Calculator();
calc.add(5, 3);
// calc.multiply(4, 2);
