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
            lineChartData.labels.push('hola');
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

