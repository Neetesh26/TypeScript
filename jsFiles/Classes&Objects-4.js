"use strict";
class Bottle {
    constructor() {
        this.Cname = "bisleri";
        this.prices = 259;
    }
}
let b1 = new Bottle();
console.log("b1 is: ", b1);
class HumanMaker {
    constructor(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
    }
}
let h1 = new HumanMaker("neetesh", true);
class BottleMaker {
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
let BT1 = new BottleMaker("Milton", 459, "black", "plastic");
let BT2 = new BottleMaker("fabric", 359, "gray", "plastic");
console.log("BT2 is running :", BT2);
class Music {
    constructor(name, artist, thumbnail = "something...", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "something special for you";
        }
    }
}
let M1 = new Music("ye tune kya kiya....", "neetesh", "", 256, false);
console.log("M1 is ruuning : ", M1);
// this keyword---------> only include when you use class inside propery in any function access variables
class Bottlemaker {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
let bn = new Bottlemaker("milton");
// private protected--------->
