let osoby = [{
        jmeno: 'Jana',
        prijmeni: 'Červená',
        vek: 23,
        sport: 'kolo',
        gender: 'žena',
    }, 
    {
        jmeno: 'Karel',
        prijmeni: 'Zelený',
        vek: 38,
        sport: 'běh',
        gender: 'muž',
    }, 
    {
        jmeno: 'Petra',
        prijmeni: 'Žlutá',
        vek: 15,
        sport: 'lezení',
        gender: 'žena',
    }, 
    {
        jmeno: 'Eliška',
        prijmeni: 'Modrá',
        vek: 5,
        sport: 'tříkolka',
        gender: 'žena',
    }, 
    {
        jmeno: 'Ondra',
        prijmeni: 'Zelený',
        vek: 55,
        sport: 'plavání',
        gender: 'muž',
    },
]

for (let i = 0; i < osoby.length; i++) {
    const osoba = osoby[i];
    if (osoba.vek >= 18 && osoba.gender === 'žena') {
        console.log(osoba.jmeno)
    }
    
}

osoby
    .filter(osoba => osoba.vek >= 18 && osoba.gender === 'žena')
    .forEach(osoba => console.log(osoba.jmeno))