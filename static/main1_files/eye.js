$(document).ready(function () {
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    //function deleteCookie(name) {
    //    setCookie(name, "", {
    //        expires: -1
    //    });
    //}
    function deleteCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    function setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires === "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value + ";path=/";

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }
    function loadstyle() {
        console.log("Результат операции1");
        if (getCookie('font-size')) {
            var intFontSize = getCookie('font-size');
            parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("fontSize", intFontSize);
        }
            
        if (getCookie('background'))
            parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("background", getCookie('background'));
        //else
        //    parent.$("div.container-fluid *").css("background", "#fff");
        if (getCookie('color'))
            parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", getCookie('color'));
        //else
        //    parent.$("div.container-fluid *").css("color", "#000");

        //if (getCookie('background1'))
        //    parent.$("div.body-content *").css("background", getCookie('background1'));
    
        //if (getCookie('color1'))
        //    parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", getCookie('color1'));


        if (getCookie('letter-spacing')) {
            parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("letter-spacing", getCookie('letter-spacing'));
        }
            
        if (getCookie('line-height')) {
            parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("line-height", getCookie('line-height'));
        }
            
        if (getCookie('img-color')) {
            parent.$("img").css("-webkit-filter", getCookie('img-color'));
        }
        else {
            parent.$("img").css("-webkit-filter", "inherit");
        }
            
        if (getCookie('font-family')) {
            parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("font-family", getCookie('font-family'));
            parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
            parent.$('.fa').css("font-family", 'FontAwesome');
        }
            
        /*куки для скрытия фото и показ*/
        if (getCookie('display')) {
            parent.$("div.container-fluid > img *, .img-fluid, img").css('display', getCookie('display'));
        }
           
            
    }
    loadstyle();

    
    $("#font1").click(function () {
        parent.$('p *, h1 *, h2 *, h3 *, h4 *, h5 *').css("font-family", 'Times new roman');
        document.cookie = 'font-family=Times new roman' + '; path=/;';
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
        parent.$('.fa').css("font-family", 'FontAwesome');
        
    });
    $("#font2").click(function () {
        parent.$('p *, h1 *, h2 *, h3 *, h4 *, h5 *').css("font-family", 'Arial');
        document.cookie = 'font-family=Arial' + '; path=/;';
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
        parent.$('.fa').css("font-family", 'FontAwesome');
    });
    $("#a1").click(function () {

        parent.$('span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *').css("fontSize", (parseInt($('p * ').css('font-size')) + 2));
        document.cookie = 'font-size=' + parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("fontSize") + '; path=/;';
        
    });
    $("#a2").click(function () {
        parent.$('span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *').css("fontSize", (parseInt($('p *').css('font-size')) - 2));
        document.cookie = 'font-size=' + parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("fontSize") + '; path=/;';
    });

    /*-----*/
    $("#c1").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("background", "#fff");
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", "#000");
        parent.$("img").css("-webkit-filter", "inherit");
        document.cookie = 'background=#fff' + '; path=/;';
        document.cookie = 'color=#000' + '; path=/;';
        document.cookie = 'img-color=inherit' + '; path=/;';
    });
    $("#c2").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("background", "#000");
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", "#fff");
        parent.$("img").css("-webkit-filter", "grayscale(1)");
        document.cookie = 'background=#000' + '; path=/;';
        document.cookie = 'color=#fff' + '; path=/;';
        document.cookie = 'img-color=grayscale(1)' + '; path=/;';
    });
    $("#c3").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("background", "#6699FF");
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", "#fff");
        document.cookie = 'background=#6699FF' + '; path=/;';
        document.cookie = 'color=#fff' + '; path=/;';
    });
    $("#c4").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("background", "#f7f3d6");
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", "#4d4b43");
        document.cookie = 'background=#f7f3d6' + '; path=/;';
        document.cookie = 'color=#4d4b43' + '; path=/;';
    });
    $("#c5").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("background", "#3b2716");
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", "#a9e44d");
        parent.$("img").css("-webkit-filter", "hue-rotate(240deg)");
        document.cookie = 'background=#3b2716' + '; path=/;';
        document.cookie = 'color=#a9e44d' + '; path=/;';
        document.cookie = 'img-color=hue-rotate(240deg)' + '; path=/;';
    });
    $("#show_img").click(function () {
        parent.$("div.container-fluid > img *, .img-fluid, img").css('display', 'block');    
        document.cookie = 'display=block' + '; path=/;';
    });
    $("#hide_img").click(function () {
        parent.$("div.container-fluid > img *, .img-fluid, img").css('display', 'none');
        document.cookie = 'display=none' + '; path=/;';
    });
    $("#i1").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("letter-spacing", "+=0.1em");
        document.cookie = 'letter-spacing=' + parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("letter-spacing") + '; path=/;';
    });
    $("#i2").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("letter-spacing", "-=0.1em");
        document.cookie = 'letter-spacing=' + parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("letter-spacing") + '; path=/;';
    });
    $("#line_int1").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("line-height", "1");
        document.cookie = 'line-height=' + parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("line-height") + '; path=/;';
    })
    $("#line_int2").click(function () {
        parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("line-height", "2");
        document.cookie = 'line-height=' + parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("line-height") + '; path=/;';
    });

    
    //$("#a_eye").click(function () {
    //    parent.$("div.body-content *").css('background', '#fff');
    //    document.cookie = 'background1=#fff' + '; path=/;';
    //    parent.$("span *, p *, h1 *, h2 *, h3 *, h4 *, h5 *, .dxgvControl_MaterialCompact *, .dxgvTable_MaterialCompact *").css("color", "#000");
    //    document.cookie = 'color1=#000' + '; path=/;';
    //});

    /*----*/
   
    $("#reset").click(function () {
        deleteCookie('line-height');
        deleteCookie('letter-spacing');
        deleteCookie('font-size');
        deleteCookie('font-family');
        deleteCookie('color');
        deleteCookie('background');
        deleteCookie('img-color');

        deleteCookie('color1');
        deleteCookie('background1');
        parent.location.reload();
    });
   
});
