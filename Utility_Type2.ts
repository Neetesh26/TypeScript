// omit- not include only omit property from type
interface clgData4{
    name:string,
    location:string,
    branch:string  /// pick property is not pick branch property
    teacherCount:number
}
var clgData4:Omit<clgData4, "branch"| "teacherCount"> = { // omit branch property 
    name:"XYZ college",
    location:"pune" 
    // branch:"mechanical" // error not allowed to add branch property



}

// -> exclude , extract , nonNullable
type Apicall  = "loading"| "pending"| "success"| "failed"

let apis :Exclude<Apicall , "pending"> = "success"  // pending is not allowed
let apis123 :Extract<Apicall , "loading" | "success">  // extract values only defined in extract

type nullableType = string | number | null | undefined
type nonNullableType = NonNullable<nullableType> // null and undefined not allowed




// Reacord -----------------> it is used to create object with defined key and value types

type productType = "id" | "name" | "price"
var products:Record< productType,string> = {
    id:"22",
    name:"product 2",
    price:"323"
}
console.log("products are : ",products);
