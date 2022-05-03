$(function (){
    let ingatlanok="/api/ingatlanok";
    let kategoriak="/api/kategoriak";
    const token = $('meta[name="csrf-token"]').attr("content");
    const ajax = new Ajax(token);

    ajax.getAjax(ingatlanok, adatbeolvas);

    const szuloElem = $(".szulo");
    const sablonElem = $(".sablon");

    function adatbeolvas(tomb) {
        $(".szulo").empty();
        tomb.forEach(function(adat) {
            let ujElem = sablonElem.clone().appendTo(szuloElem);
            const ingatlan = new Ingatlan(ujElem, adat);
            console.log(adat);
        });
    }
    sablonElem.remove();

    this.kategoriaSelect = $(".kategoriaSelect")

    ajax.getAjax(kategoriak, optionKategoriaFeltolt);

    function optionKategoriaFeltolt(tomb) {
        console.log(tomb);
        tomb.forEach((element) => {
            $(".kategoriaSelect").append(
                `<option value='${element.id}'>${element.nev}</option>`
            );
        });
    }

    $("#kuld").on("click", function(){
        let kategoria=$(".kategoriaSelect").val();
        let leiras=$("#leiras").val();
        let datum=$("#datum").val();
        let url=$("#kep").val();
        let tehermentes=0;
        if ($("#tehermentes").is(":checked")) {
            tehermentes=1;
        }

        let adat={
            kategoria: kategoria,
            leiras:leiras,
            hirdetesDatuma:datum,
            tehermentes:tehermentes,
            kepURL:url,
        };
        ajax.postAjax(ingatlanok,adat);
        location.reload();

    });

    $(window).on("torolKattintas", (event) => {
        let adat = event.detail;
        console.log(adat.id);
        ajax.deleteAjax(ingatlanok, adat.id);
        ajax.getAjax(ingatlanok, adatbeolvas);
    });

    $(window).on("erdekelKattintas", (event) => {
        let adat = event.detail;
        alert("Ingatlan: Kategória: "+adat.kategoriak.nev);
    });
});
