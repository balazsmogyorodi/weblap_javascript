window.addEventListener("load", init)



function init() {
    console.log("Hello világ");
   const articleElem = document.getElementById('tarolo');
   console.log(articleElem);
    const list = [
        {
            nev: "Maja",
         mondat:   "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
        },
        {
            nev: "Barbara",
            mondat:    "Tudtam ültetni és van két virágom",
        },
        {
            nev: "Benedek",
            mondat:  "Lebetegedtem",
        },
        {
            nev: "Dani",
            mondat:  "Tegnapi adatbázis-kezelés",
    },
    {
        nev: "Bálint",
        mondat:    "Kupcsik tanárnő vicces",
    },
    {
        nev: "Alexandra",
        mondat:  "Tegnap kialaudtam magam",
    },
    {
        nev: "Balázs",
        mondat:    "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ",
    },
    {
        nev:  "Ernő",
        mondat:  "Jó edzés volt a héten!",
    },
    ];

    const adat1 = {
        nev: "Balázs",
        Mondat: "Újra elövettem egy régi játékot, amivel már rég játszottam és nosztalgikus érzéseket vált ki." ,}
        console.log(adat1.nev);
        delete adat1.nev;
        adat1.nev = "Mogyoródi"
        console.log(adat1.Mondat);
        adat1.ertekeles = 5;
        console.log("Értékelés: " + adat1.ertekeles)
        console.log(adat1.nev);
     
    
    megjelenit(list, articleElem);
    const Szuloelem = document.querySelectorAll("section");
    megjelenit2(list, Szuloelem);
    tablazat(list, Szuloelem);

}


function megjelenit(list, articleElem) {
    let txt = "<h1> Legjobb dolgok </h1>"
    txt += "<ul>";
    for (i=0; i<list.length; i++ ) {
        txt +=  "<li>" + list[i].mondat  + "</li>";
    }
    txt += "</ul>";
    articleElem.innerHTML = txt;

 

}


function megjelenit2(list, Szuloelem) {
    let text = "";
    for (i=0; i<list.length; i++ ) {
        text += "<div>" + "<h3>" + list[i].nev + "</h3>" + "<p>" + list[i].mondat + "</p>" + "</div>";
    }
    Szuloelem[0].innerHTML += text;

}

function tablazat(list, Szuloelem) {
    let text = "";
    text += "<table>"
    text += "<thead>"
    text += "<tr>"
    for (i=0; i < list.length;i++) {   
        text +=  "<th>" + list[i].nev + "</th>";
    }
    text += "</tr>"
    text += "</thead>"
    text += "<tbody>"
    text += "<tr>"
    for (i=0; i < list.length;i++) {   
        text +=  "<td>" + list[i].mondat + "</td>";
    }
    text += "</tr>"
    text += "</tbody>"
    text += "</table>";
    Szuloelem[0].innerHTML += text;









}