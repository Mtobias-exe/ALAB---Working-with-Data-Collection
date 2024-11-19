// R-LAB
// Part 1: Refactoring Old Code

// Part 3: Feeling Loopy

// const data ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
// let rows = data.split('\n');


// console.log(rows)


// Part 2: Expanding Functionality

const data = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';


let arrData = []; 
let rows = data.split('\n'); 
let headers = rows[0].split(','); 

// iterates each row excluding the header
for (let i = 1; i < rows.length; i++) {  
    let rowData = rows[i].split(',');  
    let obj = {};

    // iterates over the headers array and match pairs
    for (let j = 0; j < headers.length; j++) {
        obj[headers[j].toLowerCase()] = rowData[j];
    }
    arrData.push(obj);
}
// Part 4: Sorting and Manipulating Data
arrData.pop();
arrData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
arrData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });


console.log(arrData);