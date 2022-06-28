$(document).ready((event) => {
  $("#set-email-limit").toggleSwitch();
  $("#active-et-command").toggleSwitch();
  $("#active-call").toggleSwitch();
  $("#active-sms").toggleSwitch();
  $("#active-email").toggleSwitch();

  $("#subscription-01").toggleSwitch();
  $("#subscription-02").toggleSwitch();
  $("#subscription-03").toggleSwitch();
  $("#subscription-04").toggleSwitch();
  $("#subscription-05").toggleSwitch();
  $("#subscription-06").toggleSwitch();
  $("#subscription-07").toggleSwitch();
  $("#subscription-08").toggleSwitch();
  $("#subscription-09").toggleSwitch();
  $("#subscription-10").toggleSwitch();
  $("#subscription-11").toggleSwitch();
  $("#subscription-12").toggleSwitch();


  Highcharts.chart('chart-line', {
    chart: {
      backgroundColor: '#FCFFC500',
      type: 'line',
    },
    title: {
        text: ''
    },
    yAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: ''
      }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },

    legend: {
      enabled: false
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }],
})
});
