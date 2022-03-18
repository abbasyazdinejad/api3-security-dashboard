google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month', ' Normal Data', 'Malicious Activity', 'Suspicious Activity'],
        ['2022/03/3', 965, 138, 222],
        ['2022/03/4', 435, 220, 399],
        ['2022/03/5', 857, 367, 487],
        ['2022/03/6', 739, 110, 315],
        ['2022/03/7', 636, 291, 229]
    ]);



    var options = {
        title: 'API Tracking',
        vAxis: { title: 'Number of Activity' },
        hAxis: { title: 'Timestamp' },
        seriesType: 'bars',
        series: { 2: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart4'));
    chart.draw(data, options);
}