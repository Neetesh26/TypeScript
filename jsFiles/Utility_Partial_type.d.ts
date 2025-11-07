interface collegeType {
    name: string;
    location: string;
    branch: string;
}
declare function updateCollege(data: Partial<collegeType>): Partial<collegeType>;
interface clgData {
    name: string;
    location: string;
    branch?: string;
}
declare function clgupdate(data: Required<clgData>): Required<clgData>;
interface clgData2 {
    name: string;
    location: string;
    branch?: string;
}
declare function clgupdate2(data: Readonly<clgData2>): Readonly<clgData2>;
interface clgData3 {
    name: string;
    location: string;
    branch: string;
}
declare function clgupdate3(data: Pick<clgData3, "name" | "location">): Pick<clgData3, "name" | "location">;
