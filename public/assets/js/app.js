$(".modalClick").on('click', function () {
    var obj = $(this).attr('id'),
        object;
    $.get('/' + obj, function (response) {
        object = response[0];
        console.log(object);
        if (object.gitLink == "") {
            $("#github").hide();
        }
        if (object.pageLink == "") {
            $("#link").hide();
        }
        $("#title").text(object.title);
        $("#role").text(object.role);
        var $div = $("<div>");
        $.each(object.pageContent, function (index, value) {
            var $p = $("<p>").html(value).appendTo($div);
        });
        $("#aboutProject").html($div);
        $("#link").attr("href", object.pageLink);
        $("#github").attr("href", object.gitLink);
        $.each(object.images, function (i, val) {
            var $img = $("<img>").addClass("img-responsive img-thumbnail").attr("src", val);
            $img.appendTo("#images");
        })
    });
});

$("#modal").on("hidden.bs.modal", function (e) {
    $("#link").show();
    $("#github").show();
    $("#images").empty();
});


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