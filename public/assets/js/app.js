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


