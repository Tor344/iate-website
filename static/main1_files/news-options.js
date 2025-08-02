$("#owl-demo").owlCarousel({

            // Наиболее важные особенности
            //margin: 10,
            loops: true,
            items: 3,
            itemsCustom: false,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,

            //Базовая скорость
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1000,

            //Автозапуск слайдов
            autoPlay: false,
            stopOnHover: false,

            // Навигация (вперед-назад)
            navigation: false,
            navigationText: ["prev", "next"],
            rewindNav: true,
            scrollPerPage: false,

            //Пагинация (слайд 1,2,3...)
            pagination: true,
            paginationNumbers: false,

            // Адаптивность
            responsive: true,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,

            // CSS стили
            baseClass: "owl-carousel",
            theme: "owl-theme",

            //Lazy load (для изображений)
            lazyLoad: false,
            lazyFollow: true,
            lazyEffect: "fade",

            //Автоматическое определение высоты блоков
            autoHeight: false,

            //JSON 
            jsonPath: false,
            jsonSuccess: false,

            //События мышки
            dragBeforeAnimFinish: true,
            mouseDrag: true,
            touchDrag: true,

            //Transitions
            transitionStyle: false,

            // Другое
            addClassActive: false,

            //Callbacks
            beforeUpdate: false,
            afterUpdate: false,
            beforeInit: false,
            afterInit: false,
            beforeMove: false,
            afterMove: false,
            afterAction: false,
            startDragging: false,
            afterLazyLoad: false

        })

        //Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
        var owl = $(".owl-carousel");
        owl.owlCarousel();
        //$(".next") - находим нашу кнопку
        $(".next").click(function () {
            owl.trigger("owl.next");
        });
        $(".prev").click(function () {
            owl.trigger("owl.prev");
        });