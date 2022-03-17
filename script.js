let reset = function() {
    $("td").css("background-color", "white");
    $("th").css("background-color", "#d0d0d0");
}

$(document).ready(function() {
    $("th").click(function() {
        reset();
        if ($(this).attr('id') == "values-1") {
            $(".values-1").css("background-color", "#e0e0ff");
        }
        else if ($(this).attr('id') == "values-2") {
            $(".values-2").css("background-color", "#e0e0ff");
        }
        else if ($(this).attr('id') == "values-3") {
            $(".values-3").css("background-color", "#e0e0ff");
        }
        else if ($(this).hasClass("asmt-1")) {
            $("td.asmt-1").css("background-color", "#e0e0ff");
        }
        else if ($(this).hasClass("asmt-2")) {
            $("td.asmt-2").css("background-color", "#e0e0ff");
        }
        else if ($(this).hasClass("asmt-3")) {
            $("td.asmt-3").css("background-color", "#e0e0ff");
        }
    });
    $("td").click(function () {
        reset();
        if ($(this).hasClass("asmt-1")) {
            $("td.asmt-1").css("background-color", "#e0e0ff");
        }
        else if ($(this).hasClass("asmt-2")) {
            $("td.asmt-2").css("background-color", "#e0e0ff");
        }
        else if ($(this).hasClass("asmt-3")) {
            $("td.asmt-3").css("background-color", "#e0e0ff");
        }
    });
});