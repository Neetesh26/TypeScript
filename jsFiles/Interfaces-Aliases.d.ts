interface User {
    name: string;
    age: number;
    email?: string;
}
declare function xyz(obj: User): void;
interface User2 {
    name: string;
    age: number;
}
interface Child extends User2 {
    gender: string;
}
declare function aws(obj: Child): void;
interface oop {
    name: string;
}
interface oop {
    Email: string;
}
declare function xyzf(obj: oop): void;
type num = number;
declare let ao: num;
type MultiType = string | number | boolean;
declare let ml: MultiType;
type mnc = {
    name: string;
};
type mncAdmin = mnc & {
    Email: string;
};
declare function amz(u: mncAdmin): void;
