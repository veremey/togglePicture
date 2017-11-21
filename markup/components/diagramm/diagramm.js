// const Chart = require('../../../node_modules/chart.js/dist/Chart.js');

window.addEventListener('load', function () {
	// var ctx = document.getElementById('myChart').getContext('2d');
	let plotLineChart = document.querySelector('#line-chart');
	var on  = true;
	var off = false;

	$('.picture__curtain').addClass('is-load');

	// setTimeout(handler: any, timeout?: long, arguments...: any)
	setTimeout(function () {
		$(' .picture__img').removeClass('is-active');
		$(' .picture_on').addClass('is-active');
		$('.toggler__checkbox').addClass('is-active');

	}, 3000);

	// $('.toggler__btn').on('click', function (e) {
	// 	e.preventDefault();
	// 	var $toggler = $(this).parents('.toggler').find('.toggler__checkbox');

	// 	if($toggler.hasClass('is-active')){
	// 		$toggler.removeClass('is-active');
	// 		$(this).parent('.toggler').find('.toggler__desc').removeClass('is-active');
	// 		$(this).parent('.toggler').find('.toggler_off').addClass('is-active');
	// 		$('.picture__img').removeClass('is-active');
	// 		$('.picture_off').addClass('is-active');
	// 	} else {
	// 		$toggler.addClass('is-active');
	// 		$(this).parent('.toggler').find('.toggler__desc').removeClass('is-active');
	// 		$(this).parent('.toggler').find('.toggler_on').addClass('is-active');
	// 		$('.picture__img').removeClass('is-active');
	// 		$('.picture_on').addClass('is-active');
	// 	}
	// });
	// "Нарушенная толерантность к глюкозе"

	const lineChart = new Chart( plotLineChart, {
		type: "line",
    data: {
        labels: ["0", "Норма", "", "Нарушенная","", "СД 2-го типа", ""],
        datasets: [{
            label: ["Рост инсулинорезистентности"],
            data: [20, 25, 40, 55, 70, 80, 85],
            pointRadius: 0,
            // pointHoverRadius: 0,
            fill: false,
            showLine: on,
            borderWidth: 2,
            borderColor: "#C5CEBD",
            // "lineTension": 0.1
        }, {
            label: "Снижение инсулинорезистентности",
            data: [20, 25, 40, 55, 70, 75, 68],
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [3, 3],
            fill: false,
            showLine: off,
            borderWidth: 2,
            borderColor: "#8FA282",
            // "lineTension": 0.2
        }, {
            label: "Рост уровня гликемии",
            data: [10, 15, 20, 35, 40, 30, 5],
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            showLine: on,
            borderWidth: 2,
            borderColor: "#EEA4B1",
            // "lineTension": 0.5
        }, {
            label: "Стимуляция секреции инсулина",
            data: [10, 15, 20, 35, 40, 35, 35],
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [3, 3],
            fill: false,
            showLine: off,
            borderWidth: 2,
            borderColor: "#E04662",
            // "lineTension": 0.1
        }, {
            label: "Снижение секреции инсулина",
            data: [3, 3, 3, 6, 15, 35, 60],
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            showLine: on,
            borderWidth: 2,
            borderColor: "#A2D9D6",
            // "lineTension": 0.1
        }, {
            label: "Снижение уровня гликемии",
            data: [3, 3, 3, 6, 15, 20, 30],
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [3,  3],
            fill: false,
            showLine: off,
            borderWidth: 2,
            borderColor: "#4AB5AD"
            // "lineTension": 0.1
        }]
    },
    options: {

    	scales: {
		    yAxes: [{
		    	display: false,
		      gridLines: {
		        display: false
		      }
		    }],
		    xAxes: [{
		      gridLines: {
		        display: false
		      }
		    }]
		  },
    	legend: {
          display: true,
          position: 'right',
          legendCallback: function(chart) {
          	return '<p>ksdjfkjdsf <br> 121212</p>';
          },
          labels: {
          		boxWidth: 0,
          		fontFamily: "'lato-regular-webfont', sans-serif",
          		usePointStyle: true,
          		// fontColor: ['#333', '#444', '#f00', '#0f0', '#00f', '#000']
          }
      }

    }
	});

	$('.toggler__desc').on('click', function () {

		if($(this).hasClass('toggler_on')){
			for (var i = lineChart.data.datasets.length - 1; i >= 0; i--) {
				if ((i % 2) !== 0) {
					lineChart.data.datasets[i].showLine = true;
				} else {
						lineChart.data.datasets[i].showLine = true;

				}

			}
		} else {
			for (var i = lineChart.data.datasets.length - 1; i >= 0; i--) {
				if(i == 5){
						lineChart.data.datasets['5'].showLine = false;
				} else
				if(i == 3){
						lineChart.data.datasets['3'].showLine = false;
				} else
				if(i == 1){
						lineChart.data.datasets['1'].showLine = false;
				}
			}
		}

		// lineChart.data.datasets[i + 1].showLine = false;
		lineChart.update();
	});

}, false);