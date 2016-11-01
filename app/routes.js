var express = require('express');
var router = express.Router();
var Projects = require('./models/projects');


router.get("/", function (req, res) {
    res.render('index', {project: Projects});
});

router.get("/:project", function (req, res) {
    console.log(req.params.project);
    var param = req.params.project;
    var result = Projects.filter(function (e) {
        return e.name == param
    });
    res.send(result);
});

module.exports = router;