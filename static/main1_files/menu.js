$(document).ready(function () {
            $('.cssmenu li.has-sub > a').on('click', function () {

                var width = $(window).width();
                //console.log('Ready doc');
                //$(this).removeAttr('href');
                var element = $(this).parent('li');
                if (width < 1000) {
                    console.log(element);
                    if (element.hasClass('open')) {

                        element.find('ul').slideUp();
                        element.removeClass('open');

                        //element.find('li').removeClass('open');
                        //element.children('ul').slideDown();
                    }
                    else {
                        element.addClass('open');
                        element.children('ul').slideDown();
                        element.siblings('li').children('ul').slideUp();
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp();
                        //$(this).removeAttr('href');
                    }


                }
                else {

                    if (element.hasClass('open')) {
                        element.find('ul').slideUp();

                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.removeClass('open');
                        element.find('ul').style.display = "block";
                        console.log(element.find('ul').style);
                        //element.find('li').removeClass('open');
                    }
                }

                //if (element.hasClass('open')) {
                //    element.removeClass('open');
                //    element.find('li').removeClass('open');
                //    element.find('ul').slideUp();
                //}
                //else {
                //    element.addClass('open');
                //    element.children('ul').slideDown();
                //    element.siblings('li').children('ul').slideUp();
                //    element.siblings('li').removeClass('open');
                //    element.siblings('li').find('li').removeClass('open');
                //    element.siblings('li').find('ul').slideUp();
                //}
            });

            $('.cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
        });

        $(window).on('load rezise', function () {
            var width = $(window).width();
            //console.log('load on');
            if (width > 1000) {
                //console.log(width);
                $('.cssmenu li.has-sub > ul').css("display", "block !important");
                // element.find('ul').style.display = "block";
                //console.log('1');
            } else {
                //console.log(width);
                $('.cssmenu li.has-sub > ul').css("display", "");
                //$('.cssmenu ul > ul').css("display", "block !important");
                //console.log('2');
            }

        });
        $(window).resize(function () {
            var width = $(window).width();
            //console.log('load rezise');
            if (width > 1000) {
                //console.log(width);
                $('.cssmenu li.has-sub').removeClass("open");
                $('.cssmenu li.has-sub > ul').css("display", "block !important");
                // element.find('ul').style.display = "block";
                //console.log('1');
            } else {
                //console.log(width);
                $('.cssmenu li.has-sub > ul').css("display", "");
                //console.log('3');
            }
        });


        //$(window).on('load resize', windowSize);
        //$(window).resize(windowSize);


        $(document).ready(function () {
            $('[data-tooltip]').addClass('tooltip1');
            $('.tooltip1').each(function () {
                $(this).append('<span class="tooltip-content">' + $(this).attr('data-tooltip') + '</span>');
            });

            //if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
            //    $('.tooltip2').mouseover(function () {
            //        $(this).children('.tooltip-content').css('visibility', 'visible');
            //    }).mouseout(function () {
            //        $(this).children('.tooltip-content').css('visibility', 'hidden');
            //    })
            //}
        });