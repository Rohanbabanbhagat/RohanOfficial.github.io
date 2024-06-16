function Csharp() {
    var options = {
        series: [90, 85, 55, 85, 80,70,70,85,60,85],
        chart: {
            type: 'donut',
            height: 350,
        },
        labels: ['C#', 'Blazor', 'MVC', 'SQL', 'ASP.Net core', '.Net framework', 'Web services', 'HTML, CSS', 'Javascript', 'WPF'],
        colors: ['#FF0000', '#00FFFF', '#FFA500', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00', '#FF0000', '#7FFFD4', '#A52A2A'],
        legend: {
            show: true, // This disables the legend
            position: 'bottom',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom',
                    show: true // Ensure the legend is also disabled on smaller screens
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#Chart"), options);
    chart.render();
}