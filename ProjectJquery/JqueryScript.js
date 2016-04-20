$(document).ready(function () {
    $(".clickable").click(function () {
        var allSubs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, bb, cc, dd, ee, ff, gg, hh, ii, jj];
        var allMain = [11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29, 210, 211, 31, 32, 33, 34, 35, 36, 37, 38, 38,39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
        for (var integer = 0; integer < allSubs.length; integer++) {
            $(allSubs[integer]).css({ "background-color": "darkgray" });
        }
        for (var integer = 0; integer < allMain.length; integer++) {
            $("#" + allMain[integer]).css({ "background-color": "darkgray" });
        }
        var list;
        var classes = $(this).attr("class");
        list = classes.split(/ /g);
        for (var int = 0; int < list.length; int++) {
            $("#" + list[int]).css({ "background-color": "green" });
        }
        $(this).css({ "background-color": "greenyellow" });
    });
});