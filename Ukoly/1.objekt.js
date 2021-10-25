let osoba = {
    jmeno: "Jana",
    prijmeni: "Nová",
    vek: 23,
    email: "jana.nova@mujmail.com",
    gender: "žena",
    adresa: {
        ulice: "Ďábelská",
        cisloUlice: 666,
    },
    mistoNarozeni: {
        ulice: "Podolská",
        obec: "Praha",
    },
};

console.log(osoba.prijmeni);    //když si chci něco z objektu vypsat

console.log(osoba.jmeno, osoba.vek, osoba.gender);     //když jsi chci vypsat více věcí z objektu

console.log(osoba.adresa.ulice);
console.log(osoba.mistoNarozeni.ulice);