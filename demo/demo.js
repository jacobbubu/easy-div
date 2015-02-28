"use strict";

var easyDiv = require('../index.js');
var div = easyDiv({
        onResize: function(width, height) {
            this.innerHTML = 'Window Size: ' + width + 'x' + height;
        },
        onReady: function() {
            console.log('DOM Loaded');
        }
    },
    document.body
);

div.style.background = '#aaa'
div.style.position = 'relative';
div.style.height = '700px';
div.style.width = '420px';
div.style.maxWidth = '420px';
div.style.maxHeight = '700px';