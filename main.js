window.addEventListener("load", init)



function init() {
    console.log("Hello világ");
   const articleElem = document.getElementById('tarolo');
   console.log(articleElem);
    articleElem.innerHTML = "<h1> Legjobb dolgok </h1>";
    const list = [
        "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
        "Tudtam ültetni és van két virágom",
        "Lebetegedtem",
        "Tegnapi adatbázis-kezelés",
        "Kupcsik tanárnő vicces",
        "Tegnap kialaudtam magam",
        "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ",
        "Jó edzés volt a héten!",
    ];
    megjelenit(list, articleElem);
    const Szuloelem = document.querySelectorAll("section");
    megjelenit2(list, Szuloelem);

}


function megjelenit(list, articleElem) {
    let txt = "<h1> Legjobb dolgok </h1>"
    txt += "<ul>";
    for (i=0; i<list.length; i++ ) {
        txt +=  "<li>" + list[i]  + "</li>";
    }
    txt += "</ul>";
    articleElem.innerHTML = txt;

 

}


function megjelenit2(list, Szuloelem) {
    let text = "";
    for (i=0; i<list.length; i++ ) {
        text += "<div>" + "<p>" + list[i] + "</p>" + "</div>";
    }
    Szuloelem[0].innerHTML += text;

}