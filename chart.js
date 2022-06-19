// Build the chart
Highcharts.chart('pie-chart', {
    chart: {
        height: 160,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Color 1',
            color: '#BDC3FF',
            y: 14.84
        }, {
            name: 'Color 2',
            color: '#D4DEFF',
            y: 11.84
        }, {
            name: 'Color 3',
            color: '#000000',
            y: 3.85
        }, {
            name: 'Color 4',
            color: '#717599',
            y: 5.67
        }]
    }]
});


// Build the chart
Highcharts.chart('pie-chart2', {
    chart: {
        height: 160,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Color 1',
            color: '#BDC3FF',
            y: 14.84
        }, {
            name: 'Color 2',
            color: '#D4DEFF',
            y: 11.84
        }, {
            name: 'Color 3',
            color: '#000000',
            y: 3.85
        }, {
            name: 'Color 4',
            color: '#717599',
            y: 5.67
        }]
    }]
});


Highcharts.chart('pie-chart3', {
    chart: {
        height: 160,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Color 1',
            color: '#BDC3FF',
            y: 14.84
        }, {
            name: 'Color 2',
            color: '#D4DEFF',
            y: 11.84
        }, {
            name: 'Color 3',
            color: '#000000',
            y: 3.85
        }, {
            name: 'Color 4',
            color: '#717599',
            y: 5.67
        }]
    }]
});
