"use strict";

var domready = require('domready');
var idCounter = 0;

module.exports = function(options, target) {
    if (options instanceof Element) {
        target = options
        options = {};
    } else {
        options = options||{};
        target = (options instanceof Element) ? target : document.body;
    }

    var divId;
    if (typeof options.id === 'string')
        divId = options.id;
    else
        divId = 'easyDiv-' + idCounter++;

    var divEle = document.createElement('div');
    divEle.setAttribute('id', divId);
    var onReady = (typeof options.onReady === 'function') ? options.onReady.bind(divEle) : null;
    var onResize = (typeof options.onResize === 'function') ? options.onResize.bind(divEle) : null;

    domready(function() {
        target.appendChild(divEle);
        if (onResize) {
            window.addEventListener('resize', function(){
                onResize(window.innerWidth, window.innerHeight);
            });
            onResize(window.innerWidth, window.innerHeight);
        };
        if (onReady) onReady();
    });
    return divEle;
};