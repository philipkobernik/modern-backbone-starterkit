import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Router from './router';


const router = new Router();
Marionette.Renderer.render = function (template, data) {
	var html;
	// Template must be compiled and in the dust cache. Recommend pre-compiling
	// and loading the templates as scripts at app start.
	dust.render(template, data, function (err, out) {
		html = out;
	});
	return html;
};

Backbone.history.start();
