'use strict';

var fs = require('fs');
var zip = require('node-zip');
var path = require('path');

var express = require('express');
var app = express();
var http = require('http').Server(app);

var serverConfigObject = {
	name: 'Nimphious\' Test Server',
	version: '0.14.9',
	gameDir: 'C:\\Program Files (x86)\\Steam\\SteamApps\\common\\Factorio',
	mods: []
};

app.get('/', (req, res) => {
	res.json(serverConfigObject);
	res.end();
});

app.get('/mods/:mod.zip', (req, res) => {
	res.sendFile(path.join(__dirname, 'mods', req.params.mod + '.zip'));
});

http.listen('8767');