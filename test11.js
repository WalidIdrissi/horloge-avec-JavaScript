function modifierHorloge() {
    const h = new Date().getHours().toString().padStart(2, 0);
    const min = new Date().getMinutes().toString().padStart(2, 0);
    const s = new Date().getSeconds().toString().padStart(2, 0);
    const j = new Date().getDate().toString().padStart(2, 0);
    const m = (new Date().getMonth() + 1).toString().padStart(2, 0);
    const y = new Date().getFullYear();
    const pmam = h >= 12 ? "PM" : "AM";
    const horlogeChaine = `${h}:${min}:${s}`;
    const dateChaine = `${j}/${m}/${y}`;
    document.getElementById("horloge").innerHTML = horlogeChaine;
    document.getElementById("date").innerHTML = dateChaine;
    document.getElementById("pmam").innerHTML = pmam;
}
modifierHorloge();
setInterval(modifierHorloge, 1000);
