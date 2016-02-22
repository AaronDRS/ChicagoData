var app = (function(window, undefined){

    var ctx = document.getElementById("canvas").getContext("2d");

    function getDataTables(){
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


    function getCharts(){

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
            console.log();
            var lineChartData = {
                labels: [data.data[0].date, data.data[1].date, data.data[2].date, data.data[3].date,  "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }, {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
            };

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

