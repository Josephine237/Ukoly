// Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π.
// Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea, která spočítá plochu pozemku dle zadané šířky a výšky.
// Číslo π najdete v JavaScriptu v proměnné Math.PI.


function elipseArea(width, height) {
    return (width / 2) * (height / 2) * Math.PI
}