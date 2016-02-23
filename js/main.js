var app = (function(window, undefined) {

    //get the context of the canvas element we want to select
    var ctx = document.getElementById("canvas").getContext("2d");

    //get json data to swot it in a table
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

    //get data to show it in charts
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

                //creates a line chart

               /*
                ---------------------------------------------
                Starts lineChartData
                ---------------------------------------------
               */
                var lineChartData = {

                    //labels that will be printed in Chart
                    labels: [],
                    datasets: [{
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: []
                    }]
                };

                //An object to compare with data index PROPERTIES
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
                            //count quantity of every crimeType
                            //FOUND in json data
                            console.log(crimeType[prop] += 1);
                        }
                    }
                }
                for(var index in crimeType){
                    lineChartData.labels.push(index);
                    //lineChartData.datasets.data.push(crim);
                    lineChartData.datasets[0].data.push(crimeType[index]);
                    console.log(lineChartData.datasets[0].data);
                    console.error(crimeType);
                }
                console.log(lineChartData.labels);
                //A new object of Chart class
                window.myLine = new Chart(ctx).Line(lineChartData, {
                    responsive: true
                });

                /*
                 ---------------------------------------------
                 lineChartData Ends
                 ---------------------------------------------
                */

            },
            type: 'GET'
        });
    }

    return {
        getDataTables: getDataTables,
        getCharts: getCharts,
    };

})(window);

//Calling that we need
app.getDataTables();
app.getCharts();
