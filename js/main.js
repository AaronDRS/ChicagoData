var app = (function(window, undefined) {

    var ctx = document.getElementById("canvas").getContext("2d");

    function getDataTables() {
        $('#example').DataTable({
            "ajax": "data.json",
            "columns": [{
                "data": "id"
            }, {
                "data": "beat"
            }, {
                "data": "block"
            }, {
                "data": "description"
            }, {
                "data": "primary_type"
            }, {
                "data": "fbi_code"
            }]
        });
    }


    function getCharts() {

        $.ajax({
            url: 'data.json',
            data: {
                format: 'json'
            },

            error: function() {
                alert('An error has occurred');
            },

            dataType: 'json',
            success: function(data) {
                console.log(data.data);
                var lineChartData = {
                    labels: [],
                    datasets: [{
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [90, 80, 70, 60, 50]
                    }]
                };

                var crimeType = {
                    ARSON: 0,
                    ASSAULT: 0,
                    BATTERY: 0,
                    CRIMINAL_TRESPASS: 0,
                    HOMICIDE: 0,
                    NARCOTICS: 0,
                    THEFT: 0,
                };
                for (var i in data.data) {
                    for (var prop in crimeType) {
                        if (data.data[i].primary_type === prop) {
                            console.log(crimeType[prop] += 1);
                            //console.log(data.data[i].primary_type);
                        }

                    }
                    lineChartData.labels.push(prop);
                }
                //console.log(crimeType);
                //suma = crimeType.ARSON + crimeType.ASSAULT + crimeType.BATTERY  +crimeType.HOMICIDE +crimeType.NARCOTICS;
                //console.log(suma);
                console.log(lineChartData.labels);
                window.myLine = new Chart(ctx).Line(lineChartData, {
                    responsive: true
                });

            },
            type: 'GET'
        });
    }

    return {
        getDataTables: getDataTables,
        getCharts: getCharts,
    };

})(window);
app.getDataTables();
app.getCharts();
