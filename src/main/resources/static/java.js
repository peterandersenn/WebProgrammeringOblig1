let billetter= [];

function kjopBillett() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let mailadresse = document.getElementById("mailadresse").value;

    if (!film || !antall || !fornavn || !etternavn || !telefonnr || !mailadresse) {
        alert("Fyll ut alle feltene etter det de spør om før du trykker 'Kjøp billett'");
        return;
    }

    if (!validerMailadresse(mailadresse) || !validerTelefonnr(telefonnr) || isNaN(antall) || antall <= 0) {
        return;
    }

    let billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        mailadresse: mailadresse
    };
    billetter.push(billett);
    oppdaterBillettListe();
    nullstillInputfelter();
}

function oppdaterBillettListe() {
    let listeElement = document.getElementById("billettListe");
    listeElement.innerHTML = "";

    for (let billett of billetter) {
        let billettInfo = document.createElement("h3");
        billettInfo.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefonnr}, Mail: ${billett.mailadresse}`;
        listeElement.appendChild(billettInfo);
    }
}

function nullstillInputfelter() {
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("mailadresse").value = "";
}

function slettAlleBilletter() {
    billetter = [];
    oppdaterBillettListe();
}

function validerMailadresse(mailadresse) {
    let mailInput = document.getElementById('mailadresse');
    if (!mailadresse.match(/^\S+@\S+\.\S+$/)) {
        mailInput.setCustomValidity("Skriv inn en gyldig mailadresse!");
        mailInput.reportValidity();
        return false;
    }
    return true;
}

function validerTelefonnr(telefonnr) {
    let telefonInput = document.getElementById('telefonnr');
    if (!telefonnr.match(/^\d{8}$/)) {
        telefonInput.setCustomValidity("Skriv inn et gyldig telefonnummer bestående av 8 siffer!");
        telefonInput.reportValidity();
        return false;
    }
    return true;
}