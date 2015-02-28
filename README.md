# easy-div

This module provides a very simple div element for your demos and prototypes up and running. Ideal for use with Beefy.

# Example

```js
var easyDiv = require('easy-div');
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
```

Please see `demo/demo.js` for further usage.

# play with beefy

Clone to your computer.

```
git clone https://github.com/jacobbubu/easy-div.git easy-div
cd easy-div
npm install
```

And then:

```
npm start
```

And open up `localhost:9966` in your browser.