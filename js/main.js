
(function ($) {
    'use strict';
    window.onload = oldgen();


    function oldgen() {
        $("#container").css('backgroundColor', 'black');
        $("#container1").css('animationName', 'middle');
        $("#container1").css('animationDuration', '7s');
        $('#container1').css('animationIterationCount', 'infinite');
        var i;
        var newimg = '';
        var img = '#old';
        for (i = 1; i <= 12; i++) {
            newimg = img + i;
            $(newimg).css('display', 'none');
        }
        $('#messenger1').css('display', 'none');
        $('#messenger2').css('display', 'none');
        $('#messenger3').css('display', 'none');
        // text display
        $("#s-text").fadeIn(0);


        $("#old1").addClass('notransition'); // Disable transitions
        $("#old1").removeClass('notransition');
        $('#messenger1').fadeIn(3000);
        $('#old1').css('display', 'flex');
        $('#old1').css('position', 'fixed');
        $("#old1").css('animationName', 'old1');
        $("#old1").css('animationDuration', '4s');
        $("#old1").css('animationTimingFunction', 'ease-in-out');

        setTimeout(function () {
            $('#old8').css('display', 'flex');
            $('#old8').css('position', 'fixed');
            $('#old8').fadeIn(3000);
            $('#messenger2').fadeIn(3000);
            if ($(window).width() >= 600) {
                $('#old8').css('paddingLeft', '75vw');
            }
            else {
                $('#old8').css('paddingLeft', '40vw');
            }

            setTimeout(() => {
                $('#messenger3').fadeIn(3000);
                $('#old7').css({
                    display: 'flex',
                    position: 'fixed',
                    animationName: 'old7',
                    animationDuration: '4s',
                    animationTimingFunction: "ease-in-out"
                });
            }, 3000);
            // trigger termination of container movement
            var old7 = document.getElementById("old7");
            old7.addEventListener("animationend", function () {
                console.log("triggered");
                setTimeout(() => {
                    $("#container1").css('animationName', 'example');
                    $("#container1").css('animationDuration', '7s');
                    $('#container1').css('animationIterationCount', '1');
                    var container1 = document.getElementById("container1");
                    container1.addEventListener("animationend", function () {
                        $("#old1").fadeOut(1000);
                        $("#old7").fadeOut(2000);
                        $("#old8").fadeOut(3000);
                        $("#messenger1").fadeOut(1000);
                        $("#messenger2").fadeOut(2000);
                        $("#messenger3").fadeOut(3000);
                        $("#s-text").fadeOut(4000);
                        setTimeout(() => {
                            newGenMethod();
                        }, 5000);
                    });
                }, 1000);
            });
        }, 4000);
    }

    // new generation starts
    function newGenMethod() {
        $("#intro").css(
            {
                display: 'flex',
                animationName: 'zoomin',
                animationDuration: '4s'
            }
        );
        var intro = document.getElementById("intro");
        intro.addEventListener("animationend", function () {
            $("#intro").css('display', 'none');
            centerText(0);
        });
    }
    // function looping over itself

    function centerText(i) {
        $("#container").css({
            background: "linear-gradient(39deg, #302d2c, #c8b130, #3a64cc, #c83131, #f58706, #7505d0, #3e850e)",
            backgroundSize: "1400% 1400%",

            webkitAnimation: "hello 25s ease infinite",
            mozAnimation: "hello 25s ease infinite",
            animation: "hello 25s ease infinite",
        });
        if (i % 4 == 0) {
            // 2,5,11,12
            $('#old2').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old2",
                    animationDuration: "4s",
                    animationTimingFunction: "ease-in-out"
                }
            );
            $('#old5').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old5",
                    animationDuration: "4s",
                    animationTimingFunction: "ease-in-out"
                }
            );
            $('#old11').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old11",
                    animationDuration: "4s",
                    animationTimingFunction: "ease-in-out"
                }
            );
            $('#old12').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old12",
                    animationDuration: "4s",
                    animationTimingFunction: "ease-in-out"
                }
            );
        }
        else if (i % 4 == 1) {
            $('#old2').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old5",
                    animationDuration: "4s"
                }
            );
            $('#old5').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old11",
                    animationDuration: "4s"
                }
            );
            $('#old11').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old12",
                    animationDuration: "4s"
                }
            );
            $('#old12').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old2",
                    animationDuration: "4s"
                }
            );
        }
        else if (i % 4 == 2) {
            $('#old2').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old11",
                    animationDuration: "4s"
                }
            );
            $('#old5').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old12",
                    animationDuration: "4s"
                }
            );
            $('#old11').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old2",
                    animationDuration: "4s"
                }
            );
            $('#old12').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old5",
                    animationDuration: "4s"
                }
            );
        }
        else {
            $('#old2').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old12",
                    animationDuration: "4s"
                }
            );
            $('#old5').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old2",
                    animationDuration: "4s"
                }
            );
            $('#old11').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old5",
                    animationDuration: "4s"
                }
            );
            $('#old12').css(
                {
                    display: "flex",
                    position: "fixed",
                    animationName: "old11",
                    animationDuration: "4s"
                }
            );
        }
        if (i == 4) {
            $("#myCanvas3").css('display', 'none');
            $("#myCanvas1").css('display', 'none');
            $("#myCanvas2").css('display', 'none');
            $("#old2").css('display', 'none');
            $("#old5").css('display', 'none');
            $("#old11").css('display', 'none');
            $("#old12").css('display', 'none');
            $("#container").css({ backgroundColor: "black" });
            // $("#container").load();
            // $("#container").fadeOut('slow').load().fadeIn('slow');
            // var container = document.getElementById("container");
            // container.location.reload();
            window.location.reload();
            // oldgen();
            return;
        }
        $("#myCanvas3").css('display', 'none');
        $("#myCanvas1").css('display', 'flex');
        $("#myCanvas2").css('display', 'none');
        genzDisplay("OCULUS", "myCanvas1");
        setTimeout(() => {
            $("#myCanvas1").css('display', 'none');
            $("#myCanvas2").css('display', 'flex');
            $("#myCanvas3").css('display', 'none');
            genzDisplay("GENZ", "myCanvas2");
            setTimeout(() => {
                $("#myCanvas1").css('display', 'none');
                $("#myCanvas2").css('display', 'none');
                $("#myCanvas3").css('display', 'flex');
                genzDisplay("third", "myCanvas3");
                setTimeout(centerText(++i), 5000);
            }, 5000);
        }, 5000);
    }
    // genz display method
    function genzDisplay(str1, str2) {
        console.log(str1);
        var c = document.getElementById(str2);
        var ctx = c.getContext("2d");
        var mask;
        var str = str1;
        var pointCount = 500;
        var fontStr;
        if ($(window).width() >= 600) {
            fontStr = "bold 128pt Helvetica Neue, Helvetica, Arial, sans-serif";
            c.height = 128;
        }
        else {
            fontStr = "bold 64pt Helvetica Neue, Helvetica, Arial, sans-serif";
            c.height = 64;
        }


        ctx.font = fontStr;
        ctx.textAlign = "center";
        c.width = ctx.measureText(str).width;
        //c.height = 128; // Set to font size
        var whitePixels = [];
        var points = [];
        var point = function (x, y, vx, vy) {
            this.x = x;
            this.y = y;
            this.vx = vx || 1;
            this.vy = vy || 1;
        }
        point.prototype.update = function () {
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();

            // Change direction if running into black pixel
            if (this.x + this.vx >= c.width || this.x + this.vx < 0 || mask.data[coordsToI(this.x + this.vx, this.y, mask.width)] != 255) {
                this.vx *= -1;
                this.x += this.vx * 2;
            }
            if (this.y + this.vy >= c.height || this.y + this.vy < 0 || mask.data[coordsToI(this.x, this.y + this.vy, mask.width)] != 255) {
                this.vy *= -1;
                this.y += this.vy * 2;
            }

            for (var k = 0, m = points.length; k < m; k++) {
                if (points[k] === this) continue;

                var d = Math.sqrt(Math.pow(this.x - points[k].x, 2) + Math.pow(this.y - points[k].y, 2));
                if (d < 5) {
                    ctx.lineWidth = .2;
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(points[k].x, points[k].y);
                    ctx.stroke();
                }
                if (d < 20) {
                    ctx.lineWidth = .1;
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(points[k].x, points[k].y);
                    ctx.stroke();
                }
            }

            this.x += this.vx;
            this.y += this.vy;
        }

        function loop() {
            ctx.clearRect(0, 0, c.width, c.height);
            for (var k = 0, m = points.length; k < m; k++) {
                points[k].update();
            }
        }

        function init() {
            // Draw text
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.rect(0, 0, c.width, c.height);
            ctx.fill();
            ctx.font = fontStr;
            ctx.textAlign = "left";
            ctx.fillStyle = "#fff";
            ctx.fillText(str, 0, c.height / 2 + (c.height / 2));
            ctx.closePath();

            // Save mask
            mask = ctx.getImageData(0, 0, c.width, c.height);

            // Draw background
            ctx.clearRect(0, 0, c.width, c.height);

            // Save all white pixels in an array
            for (var i = 0; i < mask.data.length; i += 4) {
                if (mask.data[i] == 255 && mask.data[i + 1] == 255 && mask.data[i + 2] == 255 && mask.data[i + 3] == 255) {
                    whitePixels.push([iToX(i, mask.width), iToY(i, mask.width)]);
                }
            }

            for (var k = 0; k < pointCount; k++) {
                addPoint();
            }
        }

        function addPoint() {
            var spawn = whitePixels[Math.floor(Math.random() * whitePixels.length)];

            var p = new point(spawn[0], spawn[1], Math.floor(Math.random() * 2 - 1), Math.floor(Math.random() * 2 - 1));
            points.push(p);
        }

        function iToX(i, w) {
            return ((i % (4 * w)) / 4);
        }
        function iToY(i, w) {
            return (Math.floor(i / (4 * w)));
        }
        function coordsToI(x, y, w) {
            return ((mask.width * y) + x) * 4;

        }

        setInterval(loop, 50);
        init();
    }
    // for text animation

    var Messenger = function (el, mes) {
        'use strict';
        var m = this;

        m.init = function () {
            m.codeletters = "&#*+%?£@§$";
            m.message = 0;
            m.current_length = 0;
            m.fadeBuffer = false;
            //   m.messages = [
            //     'This is a message, which can be long and all.',
            //     'This could be another message.',
            //     'Also short ones work!',
            //     'Cool.'
            //   ];
            m.messages = mes;
            setTimeout(m.animateIn, 100);
        };

        m.generateRandomString = function (length) {
            var random_text = '';
            while (random_text.length < length) {
                random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            }

            return random_text;
        };

        m.animateIn = function () {
            if (m.current_length < m.messages[m.message].length) {
                m.current_length = m.current_length + 2;
                if (m.current_length > m.messages[m.message].length) {
                    m.current_length = m.messages[m.message].length;
                }

                var message = m.generateRandomString(m.current_length);
                $(el).html(message);

                setTimeout(m.animateIn, 20);
            } else {
                setTimeout(m.animateFadeBuffer, 20);
            }
        };

        m.animateFadeBuffer = function () {
            if (m.fadeBuffer === false) {
                m.fadeBuffer = [];
                for (var i = 0; i < m.messages[m.message].length; i++) {
                    m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
                }
            }

            var do_cycles = false;
            var message = '';

            for (var i = 0; i < m.fadeBuffer.length; i++) {
                var fader = m.fadeBuffer[i];
                if (fader.c > 0) {
                    do_cycles = true;
                    fader.c--;
                    message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
                } else {
                    message += fader.l;
                }
            }

            $(el).html(message);

            if (do_cycles === true) {
                setTimeout(m.animateFadeBuffer, 50);
            } else {
                setTimeout(m.cycleText, 2000);
            }
        };

        m.cycleText = function () {
            m.message = m.message + 1;
            if (m.message >= m.messages.length) {
                m.message = 0;
            }

            m.current_length = 0;
            m.fadeBuffer = false;
            $(el).html('');

            setTimeout(m.animateIn, 200);
        };

        m.init();
    }

    console.clear();
    var messenger1 = new Messenger($('#messenger1'), [
        '#Aeroplane', 'Wright brothers', '1870-1900', '@Flight'
    ]);
    var messenger2 = new Messenger($('#messenger2'), [
        'Graham Bell', 'hello !!!', '1885-1890', '#Telephone'
    ]);
    var messenger3 = new Messenger($('#messenger3'), [
        '#Camera', 'George Eastman', 'Say Cheese ;)', '1905-1913'
    ]);
})(jQuery);
