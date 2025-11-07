interface collegeType{
    name:string,
    location:string,
    branch:string
}

function updateCollege(data:Partial<collegeType>){ // all theprpperties are optional now in interface   
    return data
}
console.log(updateCollege({name:"ABC college", location:"Mumbai"})); 





//  required property --------------->

interface clgData{
    name:string,
    location:string,
    branch?:string // optional property ?  but required in Required<>
}

function clgupdate(data:Required<clgData>){ // all theprpperties are required no matter is it ? optinal or not now in interface   
    return data
}
console.log(clgupdate({name:"ABC college", location:"banglore", branch:"CSE"})); // required to add branch also "?"




// readonly property ---------------> not allowed to change the value of property

interface clgData2{
    name:string,
    location:string,
    branch?:string // optional property ?  but required in Required<>
}

function clgupdate2(data:Readonly<clgData2>){ // all theprpperties are required no matter is it ? optinal or not now in interface   
    return data
}

// clgupdate2.name="new college" -------->           // not allowed to change 


console.log(clgupdate2({name:"ABC college", location:"banglore", branch:"CSE"})); // required to add branch also "?"



// pick property --------------->

interface clgData3{
    name:string,
    location:string,
    branch:string  /// pick property is not pick branch property
}

function clgupdate3(data:Pick<clgData3, "name" | "location">){ // only pick name and location property  
    return data
}
console.log(clgupdate3({name:"ABC college", location:"banglore"})); 