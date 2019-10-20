/*
Simple Hello World in Node.js
execute on https://www.tutorialspoint.com/execute_nodejs_online.php
*/
let sakelar = "ON";
let suhu = 80;

console.log('Case:');
console.log(`sakelar ${sakelar}`);
console.log(`suhu ${suhu}° C`);

console.log(`\n`);
console.log('Results:');
if (sakelar == "ON"){
    if (suhu >= 23){
        console.log("Dimatikan");
        sakelar = "OFF"        
    } else {
        console.log("Dinyalakan");
        sakelar = "ON" 
    }
} else if (sakelar == "OFF"){
    if (suhu < 5){
        console.log("Dinyalakan");
        sakelar = "ON"
    } else {
        console.log("Tetap Mati");
    }
} else {
    console.log("Sakelar Bermasalah")
}
console.log(`sakelar ${sakelar}`);
console.log(`suhu ${suhu}° C`);