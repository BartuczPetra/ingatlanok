class Ingatlan {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;

        this.kategoria = this.elem.children(".kategoria");
        this.leiras = this.elem.children(".leiras");
        this.datum = this.elem.children(".datum");
        this.tehermentes = this.elem.children(".tehermentes");
        this.fenykep = this.elem.children(".fenykep").children("img");
        this.torol = this.elem.children(".torol");
        this.erdekel = this.elem.children(".erdekel");
        this.setAdat(this.adat);

        this.erdekel.on("click", () => {
            this.erdekelKattintas();
        });

        this.torol.on("click", () => {
            this.torolKattintas();
        });

    }
    torolKattintas() {
        this.torolKattintasTrigger();
    }

    erdekelKattintas() {
        this.erdekelKattintasTrigger();
    }

    setAdat(adat) {
        this.kategoria.html(adat.kategoriak.nev);
        this.leiras.html(adat.leiras);
        this.datum.html(adat.hirdetesDatuma);
        if (adat.tehermentes==1) {
            this.tehermentes.html('Igen');
        }else{
            this.tehermentes.html('Nem');
        }

        this.fenykep.attr("src",adat.kepURL);
    }

    torolKattintasTrigger() {
        let esemeny = new CustomEvent("torolKattintas", { detail: this.adat });
        window.dispatchEvent(esemeny);
    }

    erdekelKattintasTrigger() {
        let esemeny = new CustomEvent("erdekelKattintas", { detail: this.adat });
        window.dispatchEvent(esemeny);
    }

}
