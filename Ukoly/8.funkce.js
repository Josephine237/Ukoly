// 8. Vytvoř funkci, která na vstupu dostane dvě čísla, zkontroluje, že jsou obě čísla větší nebo rovna nule 
// a vrátí kladný rozdíl mezi těmito čísly. Tj. pokud bude na vstupu např. 7 a 5, vrátí 2, pokud bude na vstupu 5 a 7, vrátí také 2. 
// Pokud bude jeden ze vstupů záporný, nevrátí funkce nic.


function vratKladnyRozdil1(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    let rozdil = a - b
    if (rozdil < 0) {
        rozdil *= -1         // nebo můžu napsdat  return -rozdil
           } 
    return rozdil
}


// druhá varianta

function vratKladnyRozdil2(a, b) {
    if (a < 0 || b < 0) {
        return
    }

    if (a > b) {
        return a - b
    }
    return b - a
       
}

// třeti varianta

function vratKladnyRozdil3(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return Math.abs(a - b)
}


console.log(vratKladnyRozdil1(2, 7))
console.log(vratKladnyRozdil1(7, 2))
console.log(vratKladnyRozdil2(2, 7))
console.log(vratKladnyRozdil2(7, 2))
console.log(vratKladnyRozdil3(2, 7))
console.log(vratKladnyRozdil3(7, 2))