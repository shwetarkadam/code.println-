window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
        text: "Desktop Search Engine Market Share - 2016"
    },
    data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##",
        indexLabel: "{label} {y}",
        dataPoints: [
            {y: 10, label: "No. of Participants"},
            {y: 5, label: "No. of volunteers"},
            {y: 4, label: "No. of Sponsor"},
            {y: 2, label: "No. of something"},
            {y: 1, label: "Others"}
        ]
    }]
});
chart.render();

}
