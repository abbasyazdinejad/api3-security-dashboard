    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart1() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],

            ['Financial', 5],
            ['Numerical', 2],
            ['Categorical', 3],


        ]);

        var options = {
            title: 'Sensetive Data Discovery- Request',
            width: 500,
            height: 280,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

        chart.draw(data, options);
    }

    function drawChart2() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],

            ['Financial', 4],
            ['Categorical', 2],
        ]);

        var options = {

            title: 'Sensetive Data Discovery- Response',
            width: 500,
            height: 280,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

        chart.draw(data, options);
    }