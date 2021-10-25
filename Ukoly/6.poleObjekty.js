let osoby = [{
    jmeno: 'Jana',
    prijmeni: 'Červená',
    vek: 23,
    sport: 'kolo',
}, 
{
    jmeno: 'Karel',
    prijmeni: 'Zelený',
    vek: 38,
    sport: 'běh',
}, 
{
    jmeno: 'Petra',
    prijmeni: 'Žlutá',
    vek: 15,
    sport: 'lezení',
}, 
{
    jmeno: 'Eliška',
    prijmeni: 'Modrá',
    vek: 5,
    sport: 'tříkolka',
}, 
{
    jmeno: 'Ondra',
    prijmeni: 'Zelený',
    vek: 55,
    sport: 'plavání',
},
]

for (let i = 0; i < osoby.length; i++) {
    const osoba = osoby[i];
    if (osoba.vek < 18) {
        console.log(osoba.jmeno)
    }
    
}

osoby
    .filter(osoba => osoba.vek < 18)
    .forEach(osoba => console.log(osoba.jmeno))