declare class Bottle {
    Cname: string;
    prices: number;
}
declare let b1: Bottle;
declare class HumanMaker {
    name: string;
    isHandsome: boolean;
    constructor(name: string, isHandsome: boolean);
}
declare let h1: HumanMaker;
declare class BottleMaker {
    brand: string;
    price: number;
    color: string;
    material: string;
    constructor(brand: string, price: number, color: string, material: string);
}
declare let BT1: BottleMaker;
declare let BT2: BottleMaker;
declare class Music {
    name: string;
    artist: string;
    thumbnail: string;
    length: number;
    free: boolean;
    constructor(name: string, artist: string, thumbnail: string | undefined, length: number, free: boolean);
}
declare let M1: Music;
declare class Bottlemaker {
    name: string;
    constructor(name: string);
}
declare let bn: Bottlemaker;
