google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Attacks'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var options = {
        colorAxis: {
            colors: ['red']
        }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('chart6'));

    chart.draw(data, options);
}