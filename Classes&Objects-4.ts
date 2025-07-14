class Bottle {
    Cname =  "bisleri"
    prices =259
}
let b1 =new Bottle()
console.log("b1 is: ",b1);

class HumanMaker {
    constructor(public name:string, public isHandsome:boolean) {
        
    }
}

let h1 = new HumanMaker("neetesh" , true)


class BottleMaker {
    constructor(public brand:string , public price:number, public color:string,public material:string) {
        
    }
}
let BT1= new BottleMaker("Milton", 459 , "black", "plastic")
let BT2 = new BottleMaker("fabric", 359 , "gray", "plastic")

console.log("BT2 is running :",BT2);


class Music {
    constructor(public name:string,public artist:string,public thumbnail:string = "something...",public length:number,public free:boolean){
        if (!thumbnail) {
            this.thumbnail="something special for you"
        }
    }
}
let M1 = new Music("ye tune kya kiya....","neetesh","",256,false)
console.log("M1 is ruuning : ", M1);

// this keyword---------> only include when you use class inside propery in any function access variables

class Bottlemaker{
    constructor(public name:string){
        this.name = name
    }

}
let bn = new Bottlemaker("milton")

// private protected--------->
