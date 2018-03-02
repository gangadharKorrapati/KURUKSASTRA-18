$(document).ready(function() { $('#preload').remove() });
impress().init();
document.addEventListener("impress:stepenter", function(event) {
    $("#timeline_tracker").hide();
    $("#timeline_tracker span").removeClass("year-highlight");
    var data_type = $(".active").attr("data-type");
    if (data_type == 'timeline') {
        $("#timeline_tracker").show();
        var data_year = $(".active").attr("data-year");
        $("#nav-" + data_year).addClass("year-highlight");
    }
}, false);

document.addEventListener("impress:stepenter", function(event) {
    var data_id = $(".active").attr("id");
    if (data_id == 'about') {
        $("li").removeClass("menu_highlight");
        $("#menu-about").addClass("menu_highlight");
    } else if (data_id == 'home') {
        $("li").removeClass("menu_highlight");
        $("#menu-home").addClass("menu_highlight");
    } else if (data_id == 'timeline-start') {
        $("li").removeClass("menu_highlight");
        $("#menu-timeline").addClass("menu_highlight");
    } else if (data_id == 'sponsors') {
        $("li").removeClass("menu_highlight");
        $("#menu-sponsors").addClass("menu_highlight");
    }
}, false);