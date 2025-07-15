//important things----->✅
// function types
// optional & default perameters
// Rest perameters
// overloads

function msx(name:string,age:number , cb:(arg:string)=>void){
 cb("hehehe")
}

msx("neetesh", 6,(arg:string)=>{
    // console.log("callback");
    console.log(arg);
    
})
//1
function la(name:string,gender?:string){

}
la("neetsh")
 // 2function
function opw(name:string,gender:string="not to be disclose"){

}
opw("neetesh")

//rest/spread-------->
function news(...args:number[]) {
    console.log(args);
    
}
news(1,2,3,5,5,5,5,85,4,5,5,5,5,5,5,5,5)



function newswwwwww(...args:string[]) {
    console.log(args);
    
}
newswwwwww("neetesh" , "ram","jay" , "ajay")