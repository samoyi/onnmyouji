;"use strict";


const Astrology = require('./Skill/Astrology/Astrology.js');


function Onmyouji(){};

let prototype = {};
Object.defineProperties(prototype, {
    'astrology': {
        value(nTimezone=9){
            return new Astrology(nTimezone);
        }
    },
});


Onmyouji.prototype = prototype;


module.exports = new Onmyouji();