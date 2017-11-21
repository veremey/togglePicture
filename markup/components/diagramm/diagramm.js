// const Chart = require('../../../node_modules/chart.js/dist/Chart.js');

window.addEventListener('load', function () {
	// var ctx = document.getElementById('myChart').getContext('2d');
	let plotLineChart = document.querySelector('#line-chart');
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
            borderColor: "#C5CEBD",
            // "lineTension": 0.1
        }, {
            label: "My First lechenie",
            data: [20, 25, 40, 55, 70, 75, 68],
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [5,  5],
            fill: false,
            borderColor: "#8FA282",
            // "lineTension": 0.2
        }, {
            label: "stimul",
            data: [10, 15, 20, 35, 40, 30, 5],
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            borderColor: "#EEA4B1",
            // "lineTension": 0.5
        }, {
            label: "stimul",
            data: [10, 15, 20, 35, 40, 35, 35],
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [5,  5],
            fill: false,
            borderColor: "#E04662",
            // "lineTension": 0.1
        }, {
            label: "glikemia",
            data: [3, 3, 3, 6, 15, 35, 60],
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            borderColor: "#A2D9D6",
            // "lineTension": 0.1
        }, {
            label: "glikemia",
            data: [3, 3, 3, 6, 15, 20, 30],
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [5,  5],
            fill: false,
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
          labels: {
          		boxWidth: 0,
          		fontFamily: "'lato-regular-webfont', sans-serif",
          		// fontColor: function () {
          		// 	return $('body').css("background-color");
          		// },
          		fontColor: '#333'
          }
      }

    }
	})
}, false);