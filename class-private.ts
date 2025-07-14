class btl{
    constructor(private name:string){
        console.log(this.name)
    }
    changing(){
        this.name = "neetesh"
    }

}
let bn1 = new btl("milton")
// bn1.name="jkjh" ❌ private object se variable access nhi kr sakta
bn1.changing()

class college{
    private clgname:string= "NIT";
    constructor(public name:string){
    }
}

class student extends college{
    constructor(name:string, clgname:string){
        super(name);
        this.clgname = clgname; //<------❌ Accessing private property from parent class
    }
    
}