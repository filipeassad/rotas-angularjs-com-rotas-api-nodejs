'use strict';
var express = require('express');
var path = require('path');

module.exports = function(app) {

    var path_web = path.resolve(__dirname, '..');
    var path_origin = path.resolve(__dirname, '../../');
   
    app.use('/scripts',express.static(path_web + '/scripts'));
    app.use('/pages',express.static(path_web + '/pages'));
    app.use('/node_modules',express.static(path_origin + '/node_modules'));

    app.route('/*')
    .get(function(req, res){
        res.sendFile(path_web + '/pages/ng-index.html');
    });

}