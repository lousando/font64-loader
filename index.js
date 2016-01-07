"use strict";

module.exports = function (content) {
    this && this.cacheable && this.cacheable();
    var encoded_font = content.toString('base64');
    return `module.exports = 'data:application/font;charset=utf-8;base64,${encoded_font}'`;
};

module.exports.raw = true;
