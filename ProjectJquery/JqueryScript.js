$(document).ready(function () {
    $(".clickable").click(function () {
        var allSubs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, bb, cc, dd, ee, ff, gg, hh, ii, jj];
        for (var integer = 0; integer < allSubs.length; integer++) {
             $(allSubs[integer]).css({ "background-color": "darkgray"});
        }
        var list;
        var classes = $(this).attr("class");
        list = classes.split(/ /g);
        for (var int = 0; int < list.length; int++) {
            $("#" + list[int]).css({ "background-color": "green"});
        }
    });
});