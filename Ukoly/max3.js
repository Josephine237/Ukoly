// Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce Math.max.

function max3(cislo1, cislo2, cislo3) {
    if (cislo1 < cislo2 && cislo3 < cislo2) {
        return cislo2
    }
    if (cislo3 < cislo1) {
        return cislo1
    }
    return cislo3
}