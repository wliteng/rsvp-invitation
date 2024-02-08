var loC;
var isGroom;
var isEn;
$(document).ready(function () {
    // iG = 1 if groom then 1, else bride
    // eN = 1 if english then 1, else chinese
    // loC
    var urlParams = new URLSearchParams(window.location.search);
    loC = urlParams.get('loC');
    isGroom = urlParams.get('iG');
    isEn = urlParams.get('eN');
    var calAddr;
    var PG = 'pg';
    var KUL = 'kl';
    var strDateEn = '2nd June 2024';
    var strDateEnLg = '2nd June 2024, Sunday';
    var strDateCn = '2024年6月2号';
    var strDateCnLg = '2024年6月2号,星期日';
    var strDateTimeSt = 'June 02, 2024 19:00'
    var strDateTimeEd = 'June 02, 2024 23:00'
    var strSubmitting = '<strong>Just a sec!</strong> We are saving your details.'
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCX4LoVSd9Ockg6b6fFOJZaWWxnkCVgvXo&callback=initMap';
    script.async = true;
    ppxi();
    //'YY42Sywa1kKVUDw+LILpng=='
    if (loC == PG) {
        $("#venueName").text("Daily Fish BW Raja Uda 北海拉惹乌达 天天鱼");
        $("#venueAddr").text("7117, Lorong Ceri 7, Taman Aman Jaya, 12300 Butterworth, Pulau Pinang");
        $("#venueGmap").attr("href", "https://maps.app.goo.gl/znpYSYCqjtnjvrb2A");
        $("#venueWaze").attr("href", "https://ul.waze.com/ul?place=ChIJU5SuLVvESjARWtZxtcK-LPQ&ll=5.42281900%2C100.38043000&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location");
        calAddr = 'Daily Fish BW Raja Uda 北海拉惹乌达 天天鱼';
        strDateEn = '8th June 2024'
        strDateEnLg = '8th June 2024, Saturday';
        strDateCn = '2024年6月8号';
        strDateCnLg = '2024年6月8号,星期六';
        strDateTimeSt = 'June 08, 2024 19:00'
        strDateTimeEd = 'June 08, 2024 22:00'
        strSubmitting = '<strong>请稍等!</strong> 正在为您保存信息.'
    } else if (loC == KUL) {
        loC = "KUL";
        calAddr = 'Ruyi & Lyn 如意';
    }
    document.head.appendChild(script);

    if (isGroom) {
        console.log(isGroom);
        if (isGroom == 1) {
            $("#side").val("groom");
        }
        else {
            $("#side").val("bride");
        }
    }

    if (isEn == 1) {
        
        console.log(isEn);
        $("#lbl_gallery_menu").text("Gallery");
        $("#lbl_venue_menu").text("Venue");
        $("#lbl_rsvp_menu").text("RSVP");

        $(".title-name").text("Jaze & Li Teng");
        $(".title").text(strDateEn);
        $("#lbl_rsvp_btn").text("RSVP");

        $("#lbl_marry_txt").text("We are getting hitched");
        $("#lbl_marry_txt2").text("The dates are " + strDateEnLg + ", and we would like you to be a part of it.");

        $("#lbl_rsvp").text("We would greatly appreciate if you could RSVP before 31 March 2024");

        $("#f_id").text("Your name");

        document.querySelector('#venue_date').innerHTML += '<span class="fa fa-clock-o"></span>02 June 2024, Sunday, 07:00pm';
        document.querySelector('#f_craft').innerHTML += 'Crafted by Jaze & Li Teng with lots of <span class="fa fa-heart pulse2"></span>';
        document.querySelector('#pnl_footer_txt').innerHTML += 'We look forward to hearing from you<span class="fa fa-heart pulse2"></span>';

        // showComponent("venue_date", "venue_date_cn", "venue_date_cn_png");
        // showComponent("f_craft", "f_craft_cn", "f_craft_cn_png");
        // showComponent("pnl_footer_txt", "pnl_footer_txt_cn");

    } else {
        $("#lbl_gallery_menu").text("相册");
        $("#lbl_venue_menu").text("晚宴地点");
        $("#lbl_rsvp_menu").text("敬请回复（RSVP)");

        $(".title-name").text("士恩 & 莉婷");
        if (loC == PG) {
            $(".title").text("2024年6月8号");
            $("#lbl_marry_txt2").text("日期是2024年6月8号，星期六，我们诚心邀请您参与");

            document.querySelector('#venue_date').innerHTML += '<span class="fa fa-clock-o"></span>2024年6月8号，星期六，晚上七点正';

            // showComponent("venue_date_cn_png", "venue_date_cn", "venue_date");
            // showComponent("f_craft_cn", "f_craft");
            // showComponent("pnl_footer_txt_cn", "pnl_footer_txt");
        } else {
            $(".title").text("2024年6月2号");
            $("#lbl_marry_txt2").text("日期是2024年6月2号，星期日，我们诚心邀请您参与");

            document.querySelector('#venue_date').innerHTML += '<span class="fa fa-clock-o"></span>2024年6月2号，星期日，晚上七点正';


            // showComponent("venue_date_cn", "venue_date_cn_png", "venue_date");
            // showComponent("f_craft_cn", "f_craft_cn_png", "f_craft");
            // showComponent("pnl_footer_txt_cn", "pnl_footer_txt");
        }

        document.querySelector('#f_craft').innerHTML += '这是我们做的哦 <span class="fa fa-heart pulse2"></span>';
        document.querySelector('#pnl_footer_txt').innerHTML += '我们期待您联系我们<span class="fa fa-heart pulse2"></span>';

        $("#lbl_rsvp_btn").text("敬请回复（RSVP)");
        $("#lbl_marry_txt").text("我们结婚了");

        $("#h_location").text("晚宴地点");
        $("#h_rsvp_title").text("敬请回复（RSVP)");

        $("#lbl_rsvp").text("我们希望您能在2024年3月31号前回复");

        $("#f_id").attr("placeholder", "名字");
        $("#f_email").attr("placeholder", "电邮");
        $("#f_phone").attr("placeholder", "电话号码");
        $("#f_att").attr("placeholder", "人数");
        $("#f_babychair").attr("placeholder", "多少个婴儿椅");
        $("#f_wchair").attr("placeholder", "多少个轮椅");

        $("#lbl_food_option").text("食物选择");
        $("#f_nhalal").text("非清真");
        $("#f_halal").text("清真");
        $("#f_veg").text("素食");
        $("#f_rsvp_btn").text("确定发送");

        $("#contact_us").text("联系我们");
        $("#ct_groom").text("新郎：洪士恩");
        $("#ct_bride").text("新娘：黄莉婷");

        $(".pnl-venue").text("地点");
        $("#modal_txt1").text("谢谢！");
        $("#modal_txt2").text("我们很感恩您能参加我们的婚礼。");
    }
    var initializeMusic = false;

    /******* Background Music ********/
    var icon = false;
    var audio = $("#music")[0];
    audio.volume = 0.2;

    $("#toggle-icon").click(function () {
        if (icon) {
            audio.pause();
            $("#toggle-icon").removeClass("fa-volume-up");
            $("#toggle-icon").addClass("fa-volume-off");
            icon = false;

        } else {
            audio.play();
            $("#toggle-icon").addClass("fa-volume-up");
            $("#toggle-icon").removeClass("fa-volume-off");
            icon = true;

        }
    });

    document.addEventListener("click", function () {
        if (initializeMusic == false) {
            $("#toggle-icon").trigger('click');
            initializeMusic = true;
        }
    });

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('#slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: "100%",
        itemMargin: 0

    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    /**
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';

        // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }
    **/

    /********************** Embed youtube video *********************/
    //$('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Jaze and Li Teng's Wedding",

            // Event start date
            start: new Date(strDateTimeSt),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date(strDateTimeEd),

            // Event Address
            address: calAddr,

            // Event Description
            description: "We can't wait to see you on our big day. For any queries or issues, please contact Jaze Ang at +60123941039."
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
    // $('#rsvp-form').on('submit', function (e) {
    //     e.preventDefault();
    //     var data = $(this).serialize();

    //     $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

    //     if (MD5($('#invite_code').val()) !== 'b0e53b10c1f55ede516b240036b88f40'
    //         && MD5($('#invite_code').val()) !== '2ac7f43695eb0479d5846bb38eec59cc') {
    //         $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
    //     } else {
    //         $.post('https://script.google.com/macros/s/AKfycbyo0rEknln8LedEP3bkONsfOh776IR5lFidLhJFQ6jdvRiH4dKvHZmtoIybvnxpxYr2cA/exec', data)
    //             .done(function (data) {
    //                 console.log(data);
    //                 if (data.result === "error") {
    //                     $('#alert-wrapper').html(alert_markup('danger', data.message));
    //                 } else {
    //                     $('#alert-wrapper').html('');
    //                     $('#rsvp-modal').modal('show');
    //                 }
    //             })
    //             .fail(function (data) {
    //                 console.log(data);
    //                 $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
    //             });
    //     }
    // });
    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', strSubmitting));

        /*if (MD5($('#invite_code').val()) !== 'b0e53b10c1f55ede516b240036b88f40'
            && MD5($('#invite_code').val()) !== '2ac7f43695eb0479d5846bb38eec59cc') {
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
        } else {*/
        //$.post('https://script.3.com/macros/s/AKfycbzUqz44wOat0DiGjRV1gUnRf4HRqlRARWggjvHKWvqniP7eVDG-/exec', data)
        //$.post('https://script.google.com/macros/s/AKfycbyT8xXoQo4tGBa5RGfvicqOKJNyHDPoOJN_OlG0yLzLpm7otBDyV0_HOxIr6DbDaDdq3Q/exec', data)
        $.post('https://script.google.com/macros/s/AKfycbyDmWNvD6h53ty2ck7hL7CDkM2BenPMQGbYmLr2ERSuEnVs4jJkLvmmIifY1j7EPsb1hg/exec', data)
            .done(function (data) {
                if (data.result === "error") {
                    $('#alert-wrapper').html(alert_markup('danger', data.message));
                } else {
                    $('#alert-wrapper').html('');
                    $('#rsvp-modal').modal('show');
                }
            })
            .fail(function (data) {
                $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
            });
        //}
    });
});

/********************** Extras **********************/

function ppxi() {
    var urlParams = new URLSearchParams(window.location.search);
    var x = urlParams.get('x');
    //*** to whoever's looking at this. Hi, for the sake of the RVSP accuracy, please refrain from experimenting the code. Thank you :) ***/
    switch (x) {
        case "YY42Sywa1kKVUDw+LILpng==":
            this.loC = 'kl'
            this.isGroom = 0;
            this.isEn = 1;
            break;
        case 'r0QKrOowPE+ZB7FFlRqAzA==':
            loC = 'kl'
            isGroom = 0;
            isEn = 0;
            break;
        case '2EVNjQ2lqkWM4Jy5u40HVQ==':
            loC = 'kl'
            isGroom = 1;
            isEn = 1;
            break;
        case 'rUWx+1eDJEG4ZGMvkmHCTg==':
            loC = 'kl'
            isGroom = 1;
            isEn = 0;
            break;
        case 'sWReUe/YFkSWzUvBolmkVw==':
            loC = 'pg'
            isGroom = 1;
            isEn = 0;
            break;
        case 'vlmdJv4kT06F+hLtM9lyeA==':
            break;
        case 'ibAUYIBNQ0eULIHEx9b6YA==':
            break;
        default:

    }


}

// Google map
function initMap() {
    var urlParams = new URLSearchParams(window.location.search);
    var x = urlParams.get('x');

    var location_pg = { lat: 5.422840355250391, lng: 100.38048903003009 };
    var location_kl = { lat: 3.1435749530792236, lng: 101.66743469238281 };
    var location = location_kl;

    if (x == 'sWReUe/YFkSWzUvBolmkVw==') {
        location = location_pg;
    }
    //var location = { lat: 3.1435749530792236, lng: 101.66743469238281 };
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var request = {
        placeId: "ChIJI2E9N69JzDERCb6P3EZqGF0",
        fields: ['name']
    };

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
/**
function initBBSRMap() {
    var la_fiesta = { lat: 20.305826, lng: 85.85480189999998 };
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}**/

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};

function showComponent(toShowObj, toHideObjCn, toHideObjCnPng) {
    $("#" + toShowObj).css("display", "block");
    $("#" + toHideObjCn).css("display", "none");
    $("#" + toHideObjCnPng).css("display", "none");
}