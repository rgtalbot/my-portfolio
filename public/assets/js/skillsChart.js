var chartData = {
    type: 'horizontalBar',
    data: {
        labels: ["HTML/CSS", "Javascript/jQuery", "Node.js", "Angular", "MySQL", "MongoDB"],
        datasets: [{
            label: "Proficiency",
            data: [4, 4, 3, 1, 2, 1],
            backgroundColor: [
                'rgba(83, 120, 153, 0.7)',
                'rgba(188, 205, 213, 1)',
                'rgba(83, 120, 153, 0.7)',
                'rgba(188, 205, 213, 1)',
                'rgba(83, 120, 153, 0.7)',
                'rgba(188, 205, 213, 1)'
            ],
            borderColor: [
                'rgba(83, 120, 153, 1)',
                'rgba(188, 205, 213, 1)',
                'rgba(83, 120, 153, 1)',
                'rgba(188, 205, 213, 1)',
                'rgba(83, 120, 153, 1)',
                'rgba(188, 205, 213, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 3000
        },
        tooltips: {
            enabled: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    // Create scientific notation labels
                    callback: function (value, index, values) {
                        if (value === 1) {
                            return "Beginner"
                        } else if (value === 2) {
                            return "Knowledgable"
                        } else if (value === 3) {
                            return "Proficient"
                        } else if (value === 4) {
                            return "Rockstar"
                        }
                    }
                },
                labels: ["Beginner", "Knowledgable", "Proficient", "Rockstar"]
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]

        },
        legend: {
            display: false
        }
    }

};

var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function () {
    if (isScrolledIntoView('#skills')) {
        if (inView) {
            return;
        }
        inView = true;
        var ctx = $("#skillsChart");
        new Chart(ctx, chartData);
    } else {
        inView = false;
    }
});