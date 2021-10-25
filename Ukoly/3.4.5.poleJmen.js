let jmena = ['Viktor', 'Honza', 'Hana', 'Marketa', 'Felix', 'Sofie'];

jmena.forEach((jmena) => {              //stejný zápis jako cyklus for, vypíše se to stejně, ale tento zápis je jednodušší
	console.log(jmena)
    }
)

jmena.forEach(jmeno => console.log(jmeno))  //stejný zápis jako výše 

for (let i = 0; i < jmena.length; i++) {        
    let jmeno = jmena[i]                      // vytvářim konstantu jméno a přiřadím do ní takovou položku z pole, která má index i, ten index i se každou obrátku v cyklu zvyšuje o jedničku
    console.log(jmeno)                  // nezapomenout vždy cyklus for vypsat
}

console.log(jmena.length);   //nejprve jsi zjistím kolik má pole jmen, abych mohla vypsat poslední
console.log(jmena[0]);      //vypíšu jsi první jméno
console.log(jmena[5]);      //vypíšu jsi poslední jméno

console.log(jmena[jmena.length - 1])        //elegantnější řešení než to vypisovat postupně, kdyby náhodou někdo změnil pole

