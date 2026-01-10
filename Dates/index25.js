// Date Objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

const date = new Date();

console.log(date); 

//Date(year, month, day, hour, minute, second, ms)
const date1 = new Date(2023, 9, 26, 15, 30, 0, 0);
console.log(date1);

const date2 = new Date("2035-01-15T12:00:00Z");  // T = time,z = UTC time
console.log(date2);


const date3 = new Date(0); 
console.log(date3);

const date4 = new Date(1695060); //1695060 millisec after 0th(1969)
console.log(date4);

const date5 = new Date();
const year = date5.getFullYear();
const dateofweek = date.getDay();
console.log(year);
console.log(dateofweek);



const date6 = new date();
date.setFullYear(2025);
date.setMinutes(25);

console.assert.log(date6);


const date7 = new Date("2023-12-31");
const date8 = new Date("2023-12-30");

if(date2 > date1){
    console.log("HAPPY NEW YEAR");
}