/*
Simple Hello World in Node.js
For run this script, please visit https://www.tutorialspoint.com/execute_nodejs_online.php
*/

let klien = 19;
let setoran = 100000;
let bunga;
let deposito = 0;
let i;

for (i = 1; i <= 12; i++) {
    if (klien >= 18){
        if (setoran >= 100000 && setoran <= 10000000){
            if (klien >= 60){
                console.log(`Rp ${setoran} 2%`);
            } else {
                if (setoran >= 100000 && setoran <= 999999){
                    console.log(`Rp ${setoran} 1%`);
                    deposito = deposito + (setoran * 1 / 100);
                }
                if (setoran >= 1000000 && setoran <= 4999999){
                    console.log(`Rp ${setoran} 1.30%`);
                     deposito = deposito + (setoran * 1.30 / 100);
                }
                if (setoran >= 5000000 && setoran <= 10000000){
                    console.log(`Rp ${setoran} 1.50%`);
                    deposito = deposito + (setoran * 1.50 / 100);
                }                
            }
        } else {
            console.log("setoran tidak memenuhi syarat");
            break;
        }
    } else {
        console.log("Belum cukup usia");
        break;
    }
}

console.log(deposito);
