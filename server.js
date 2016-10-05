'use strict';

var fs = require('fs');
var zip = require('adm-zip');
var path = require('path');

var express = require('express');
var app = express();
var http = require('http').Server(app);

var serverConfigObject = {};

app.get('/', (req, res) => {
	res.json(serverConfigObject);
	res.end();
});

app.get('/mods/:mod.zip', (req, res) => {
	res.sendFile(path.join(__dirname, 'mods', req.params.mod + '.zip'));
});

http.listen('8767');

function loadServerConfig() {
	try {
		var o = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
	} catch (err) {
		console.log('Unable to load and parse the server configuration.', err);
	}
}