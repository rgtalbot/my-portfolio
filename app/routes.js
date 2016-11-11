var express = require('express');
var router = express.Router();
var Projects = require('./models/projects');
var moment = require('moment');


router.get("/", function (req, res) {
    res.render('index', {project: Projects});
});

router.get("/:project", function (req, res) {
    var param = req.params.project;
    console.log(param, moment().format('hh:mm:ss a, MM/DD/YY'));
    var result = Projects.filter(function (e) {
        return e.name == param
    });
    res.send(result);
});

module.exports = router;