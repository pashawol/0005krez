const $ = jQuery;

function eventHandler() {
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/main.jpg);"></div>')
	// /добавляет подложку для pixel perfect
	const icon = `<svg width="49" height="100" viewBox="0 0 49 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 97L42.2218 57.7782C46.5176 53.4824 46.5176 46.5176 42.2218 42.2218L3.00001 3" stroke="white" stroke-width="6"/>
</svg>`;
	const arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// // карусель




	var $status = $('.pagingInfo');
	var $slickElement = $('.s-rews__slider--js');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.html(i + '<span class="text-secondary"> /</span> ' + slick.slideCount);
	});

	let defSl = {
		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		dots: true,
		// autoplay: true,
		// autoplaySpeed: 6000,
		lazyLoad: 'progressive',
		slidesToShow: 1,
		mobileFirst: true
		// adaptiveHeight: true
	}
	$.fancybox.defaults.backFocus = false;
	$slickElement.slick({

		...defSl

	});

	$('.slider-js').slick({

		...defSl

	});
	$('.sResults__slider--js').slick({

		// ...defSl,
		speed: 600,
		infinite: true,
		arrows: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		dots: true,
		// autoplay: true,
		// autoplaySpeed: 6000,
		// lazyLoad: 'progressive',
		slidesToShow:1,
		// mobileFirst: true,
		adaptiveHeight: true,
 
	});

	// $('.fancy-gal:not(.slick-cloned)').fancybox();
	// $().fancybox({
	// 	selector: '.s-training .slick-slide:not(.slick-cloned) a',

	// });
	$().fancybox({
		selector: '.sResults__slider--js .slick-slide:not(.slick-cloned) a',
	});


	$(".link-modal").fancybox({
		arrows: false,
		infobar: false,
		touch: false,
		type: 'inline',
		i18n: {
			en: {
				CLOSE: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
				// PLAY_START: "Start slideshow",
				// PLAY_STOP: "Pause slideshow",
				// FULL_SCREEN: "Full screen",
				// THUMBS: "Thumbnails",
				// DOWNLOAD: "Download",
				// SHARE: "Share",
				// ZOOM: "Zoom"
			},
		},
	});

	$(function () {
		var today = new Date();
		var moscow_time = new Date();
		moscow_time.setTime(today.getTime() + 3 * 60 * 60 * 1000);

		var moscow_next_day_time = new Date();
		moscow_next_day_time.setTime(moscow_time.getTime() + 24 * 60 * 60 * 1000);

		var hours_ak = (moscow_time.getUTCHours());
		var day = moscow_time.getUTCDate();
		var month = moscow_time.getUTCMonth();
		var day_of_week = moscow_time.getUTCDay();


		if (hours_ak >= 15) {
			day = moscow_next_day_time.getUTCDate();
			day_of_week = moscow_next_day_time.getUTCDay();
			month = moscow_next_day_time.getUTCMonth();
		}

		var monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		var weekdays = ['в воскресенье', 'в понедельник', 'во вторник', 'в среду', 'в четверг', 'пятницу', 'в субботу'];
		$('.js_date').text(day + ' ' + monthes[month]);
		$('.js_weekday').text(weekdays[day_of_week]);


	});





	// You can also use "$(window).load(function() {"

	var seats = Math.floor(Math.random() * (32 - 13) + 13);
	function InfoDVDSeats() { document.write(seats); }


	function ShowTimer() {

		var today = new Date();
		var moscow_time = new Date();
		moscow_time.setTime(today.getTime() + 3 * 60 * 60 * 1000);

		var moscow_next_day_time = new Date();
		moscow_next_day_time.setTime(moscow_time.getTime() + 24 * 60 * 60 * 1000);

		var hours_ak = (moscow_time.getUTCHours());
		var day = moscow_time.getUTCDate();
		var month = moscow_time.getUTCMonth();
		var day_of_week = moscow_time.getUTCDay();


		var time_l_nk;


		if (hours_ak >= 15 && hours_ak <= 19) {
			day = moscow_next_day_time.getUTCDate();
			day_of_week = moscow_next_day_time.getUTCDay();
			month = moscow_next_day_time.getUTCMonth();
			time_l_nk = 48;
		}
		else {
			time_l_nk = 24;
		}




		var _id = "f9af99df355584d1355c120b8d09f0a0";
		while (document.getElementById("timer" + _id)) _id = _id + "0";
		document.write("<div id='timer" + _id + "' style='min-width:369px;height:72px;'></div>");
		var _t = document.createElement("script");
		_t.src = "//info-dvd.ru/js/megatimer/timer.min.js";
		var _f = function (_k) {
			var l = new MegaTimer(_id, {
				"view": [1, 1, 1, 1],
				"type": {
					"currentType": "3",
					"params": {
						"weekdays": [1, 1, 1, 1, 1, 1, 1],
						"usertime": false,
						"time": "19:00",
						"tz": -180,
						"hours": time_l_nk,
						"minutes": "0"
					}
				},
				"design": {
					"type": "text",
					"params": {
						"number-font-family": {
							"family": "Comfortaa",
							"link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
						},
						"number-font-size": "60",
						"number-font-color": "#000",
						"separator-margin": "20",
						"separator-on": false,
						"separator-text": ":",
						"text-on": true,
						"text-font-family": {
							"family": "Comfortaa",
							"link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
						},
						"text-font-size": "12",
						"text-font-color": "#c7c7c7"
					}
				},
				"designId": 1,
				"theme": "white",
				"width": 369,
				"height": 72
			});
			if (_k != null) l.run();
		};
		_t.onload = _f;
		_t.onreadystatechange = function () {
			if (_t.readyState == "loaded") _f(1);
		};
		var _h = document.head || document.getElementsByTagName("head")[0];
		_h.appendChild(_t);

	};




};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}


