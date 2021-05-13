// isotope

let btns = $("#servicosRecentes .button-group button");

btns.click(function (e) {
    $("#servicosRecentes .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#servicosRecentes .grid").isotope({
        filter: selector,
    });
});

$(window).on("load", function(){
    $("#servicosRecentes .grid").isotope({
        filter: "*",
    });
});