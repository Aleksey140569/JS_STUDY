window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let calc = require('./parts/calc.js'),
        myForm = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        myModal = require('./parts/modal.js');

    calc();
    myForm();
    slider();
    tabs();
    timer();
    myModal();
});