"use strict";
function updateCollege(data) {
    return data;
}
console.log(updateCollege({ name: "ABC college", location: "Mumbai" }));
function clgupdate(data) {
    return data;
}
console.log(clgupdate({ name: "ABC college", location: "banglore", branch: "CSE" })); // required to add branch also "?"
function clgupdate2(data) {
    return data;
}
// clgupdate2.name="new college" -------->           // not allowed to change 
console.log(clgupdate2({ name: "ABC college", location: "banglore", branch: "CSE" })); // required to add branch also "?"
function clgupdate3(data) {
    return data;
}
console.log(clgupdate3({ name: "ABC college", location: "banglore" }));
