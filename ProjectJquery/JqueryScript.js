
$(document).ready(function () {
        $('#popup_background').fadeIn('fast');
        $('#popup_box').fadeIn('fast');

        $(this).click(function () {
            $('#popup_background').fadeOut('slow');
            $('#popup_box').fadeOut('slow');
            $("#Information_website").fadeIn('slow');
        });
        $("#Information_website").click(function () {
            $('#popup_background').fadeIn('slow');
            $('#popup_box').fadeIn('slow');
            $("#Information_website").fadeOut('slow')
            return false;
        });

    $(".clickable").click(function () {
        var allSubs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, bb, cc, dd, ee, ff, gg, hh, ii, jj];
        var allMain = [11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29, 210, 211, 31, 32, 33, 34, 35, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
        var timeout = 0

        function test(id, timeout,i) {
            setTimeout(function () {
                $("#" + id).css({
                    "transition": "background-color 0.5s ease",
                    "background-color": "#dd385a",
                    "border-radius": "12px",
                    "box-shadow": "5px 5px #91000E"
                });
                console.log(["edit #" + id]);
                if (--i) {
                    test(id,timeout,i)
                }
            },timeout);
        };


        if ($(this).css('backgroundColor') == "rgb(221, 56, 90)") {
            $(".pmain").css({ "background-Color": "transparent" });
            $(".pmain").css({ "background": "transparent" });
            console.log("unselected")
        }
        else {

            for (var integer = 0; integer < allSubs.length; integer++) {
                $(allSubs[integer]).css({
                    "background-color": "transparent",
                    "box-shadow": "none"
                });
            }
            for (var integer = 0; integer < allMain.length; integer++) {
                $("#" + allMain[integer]).css({
                    "background-color": "transparent",
                    "box-shadow": "none"          
                });
            }
            var list;
            var classes = $(this).attr("class");
            list = classes.split(/ /g);
            $(this).css({
                "background-color": "#dd385a",
                "border-radius": "12px",
                "box-shadow": "5px 5px #91000E"
            });

            for (var int = 0; int < list.length; int++) {
                if (timeout == 0) {
                    timeout = 100;
                }
                test(list[int], timeout,3);
                timeout + 100;
            }
        }
    });
});