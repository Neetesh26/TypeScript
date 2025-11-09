function Addintion(target:any , key:string ,descriptor:PropertyDecorator){
    console.log(descriptor);
    
    descriptor.value =  function add(a:number,b:number ){
        return "additing is " + a + b;
    }
}


class Std {
    @Addintion
    add(a: number, b: number): number {
        return a + b;
    }
}
const std = new Std();
console.log(std.add(2, 3));