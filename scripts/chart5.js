google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
    ]);

    var options = {
        width: 600,
        height: 280,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart5'));

    chart.draw(data, options);

    setInterval(function() {
        data.setValue(0, 1, 30 + Math.round(40 * Math.random()));
        chart.draw(data, options);
    }, 11000);
    setInterval(function() {
        data.setValue(1, 1, 30 + Math.round(50 * Math.random()));
        chart.draw(data, options);
    }, 5000);
    setInterval(function() {
        data.setValue(2, 1, 50 + Math.round(30 * Math.random()));
        chart.draw(data, options);
    }, 26000);
}