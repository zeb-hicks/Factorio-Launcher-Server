'use strict';

var fs = require('fs');
var path = require('path');

var express = require('express');
var app = express();
var http = require('http').Server(app);

var serverConfigObject = {
	name: 'Nimphious\' Test Server',
	version: '0.14.9',
	mods: [
		{
			name: 'Resource Spawner Overhaul',
			url: 'https://mods.factorio.com/mods/orzelek/rso-mod',
			version: '2.2.3',
			download: '/mods/rso-mod_2.2.3.zip'
		},
		{
			name: 'Rail Tanker',
			url: 'https://mods.factorio.com/mods/Choumiko/RailTanker',
			version: '1.4.0',
			download: '/mods/RailTanker_1.4.0.zip'
		}
	]
};

app.get('/', (req, res) => {
	res.json(serverConfigObject);
	res.end();
})

http.listen('8767');