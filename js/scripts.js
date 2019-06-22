// clock functions
function flipTo(digit, n) {
    var current = digit.attr('data-num');
    digit.attr('data-num', n);
    digit.find('.front').attr('data-content', current);
    digit.find('.back, .under').attr('data-content', n);
    digit.find('.flap').css('display', 'block');
    setTimeout(function () {
        digit.find('.base').text(n);
        digit.find('.flap').css('display', 'none');
    }, 350);
}

function jumpTo(digit, n) {
    digit.attr('data-num', n);
    digit.find('.base').text(n);
}


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function updateGroup(group, n, flip) {
    var digh = $('.hundred' + group);
    var nh = n / 10;
    var digit1 = $('.ten' + group);
    var digit2 = $('.' + group);
    var numh = Math.floor(n / 100);
    var num1 = Math.floor(nh % 10);
    var num2 = Math.floor(n % 10);
    if (digh.attr('data-num') != numh) {
        if (flip) flipTo(digh, numh);
        else jumpTo(digh, numh);
    }
    if (digit1.attr('data-num') != num1) {
        if (flip) flipTo(digit1, num1);
        else jumpTo(digit1, num1);
    }
    if (digit2.attr('data-num') != num2) {
        if (flip) flipTo(digit2, num2);
        else jumpTo(digit2, num2);
    }
}

function setTime(flip) {
    var time2 = getTimeRemaining("01/18/2019 12:00 AM");
    // console.log(time2);
    updateGroup('day', time2.days, flip);
    updateGroup('hour', time2.hours, flip);
    updateGroup('min', time2.minutes, flip);
    updateGroup('sec', time2.seconds, flip);
}

$(document).ready(function () {

    setTime(false);
    setInterval(function () {
        setTime(true);
    }, 1000);

});




var vid_over;
$(document).ready(function () {
    vid_over = document.getElementById("videoOverlay");
});


function hideOverlay() {
    vid_over.style.bottom = "100%";
    $('#after-movie').each(function(index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });
}

function showOverlay() {
    vid_over.style.bottom = "0";
}

